<?php

namespace Firefight\ForumFeedback\Api\Controller;

use Firefight\ForumFeedback\DiscussionReportData;
use Firefight\ForumFeedback\UserUUID;
use Flarum\Discussion\Discussion;
use Flarum\Post\CommentPost;
use Flarum\Tags\Tag;
use Flarum\User\User;
use Laminas\Diactoros\Response\EmptyResponse;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Illuminate\Support\Arr;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Http\RequestUtil;

class PostCreator implements RequestHandlerInterface
{
    protected SettingsRepositoryInterface $settings;

    private $feedbackTag;
    private $featureFeedbackTag;
    private $generalFeedbackTag;
    private $bot;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;

        $this->feedbackTag = Tag::where('slug', $this->settings->get('firefight-feedback-plugin.feedback_slug'))->firstOrFail();
        $this->featureFeedbackTag = Tag::where('slug', $this->settings->get('firefight-feedback-plugin.feature_feedback_slug'))->firstOrFail();
        $this->generalFeedbackTag = Tag::where('slug', $this->settings->get('firefight-feedback-plugin.general_feedback_slug'))->firstOrFail();
        $this->bot = User::findOrFail($this->settings->get('firefight-feedback-plugin.bot_id'));
    }

    private function getParams($parsedBody) {
        return [
            'title' => Arr::get($parsedBody, 'title', 'title undefined'),
            'image_url' => Arr::get($parsedBody, 'image_url', ''),
            'description' => Arr::get($parsedBody, 'description', 'descirption undefined'),
            'coord_x' => floatval(Arr::get($parsedBody, 'coord_x', 0)),
            'coord_y' => floatval(Arr::get($parsedBody, 'coord_y', 0)),
            'friendly_coordinates' => Arr::get($parsedBody, 'friendly_coordinates', ''),
            'type' => intval(Arr::get($parsedBody, 'type', 0)),
            'mood' => intval(Arr::get($parsedBody, 'mood', 0)),
            'timestamp' => Arr::get($parsedBody, 'timestamp', 0),
            'uuid' => Arr::get($parsedBody, 'uuid', 'f498513c-e8c8-4773-be26-ecfc7ed5185d')
        ];
    }

    private function createDiscussion($params, $user) {
        $discussion = Discussion::start($params['title'], $user);
        $discussion->save();

        $discussion->tags()->attach($this->feedbackTag->id);

        if ($params['type'] == 0) {
            $discussion->tags()->attach($this->generalFeedbackTag->id);
        } else if ($params['type'] == 1) {
            $discussion->tags()->attach($this->featureFeedbackTag->id);
        }



        return $discussion;
    }

    public function sendPost($discussion, $params, $user) {
      $post_discription = "
![]($params[image_url])
> ### $params[description]

> Geo-Phrase: $params[friendly_coordinates]


>!raw POST
``` none
title: $params[title]
description: $params[description]
coord_x: $params[coord_x]
coord_y: $params[coord_y]
friendly_coordinates: $params[friendly_coordinates]
type: $params[type]
mood: $params[mood]
timestamp: $params[timestamp]
uuid: $params[uuid]
```
";
        $post = CommentPost::reply(
            $discussion->id,
            $post_discription,
            $user->id,
            "::0"
        );

        $post->save();

        $discussion->refreshCommentCount();
        $discussion->refreshParticipantCount();

        $discussion->update();
    }

    private function submitReportData($discussion, $params) {
        $reportData = new DiscussionReportData;

        $reportData->discussion_id = $discussion->id;
        $reportData->image_url = $params['image_url'];
        $reportData->coord_x = $params['coord_x'];
        $reportData->coord_y = $params['coord_y'];
        $reportData->friendly_coordinates = $params['friendly_coordinates'];
        $reportData->type = $params['type'];
        $reportData->mood = $params['mood'];
        $reportData->timestamp = $params['timestamp'];
        $reportData->uuid = $params['uuid'];

        $reportData->save();
    }

    public function handle(Request $request): Response
    {
        $actor = RequestUtil::getActor($request);


        if ($actor->id != $this->settings->get('firefight-feedback-plugin.bot_id')) {
          return new EmptyResponse(403);
        }

        $params = $this->getParams($request->getParsedBody());


        $user = $actor;

        $uuid = UserUUID::where('uuid', $params['uuid'])->first();

        if ($uuid) {
          $user = $uuid->user;
        }


        $discussion = $this->createDiscussion($params, $user);

        $this->sendPost($discussion, $params, $user);

        $this->submitReportData($discussion, $params);

        return new EmptyResponse(204);
    }
}
