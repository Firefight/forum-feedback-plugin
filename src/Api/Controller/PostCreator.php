<?php

namespace Firefight\ForumFeedback\Api\Controller;

use Flarum\Discussion\Discussion;
use Flarum\Post\CommentPost;
use Flarum\Tags\Tag;
use Flarum\User\User;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Illuminate\Support\Arr;
use Flarum\Settings\SettingsRepositoryInterface;

class PostCreator implements RequestHandlerInterface
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function handle(Request $request): Response
    {
        // Settings
        $feedbackTag = Tag::where('slug', $this->settings->get('firefight-feedback-plugin.feedback_slug'))->firstOrFail();
        $featureFeedbackTag = Tag::where('slug', $this->settings->get('firefight-feedback-plugin.feature_feedback_slug'))->firstOrFail();
        $generalFeedbackTag = Tag::where('slug', $this->settings->get('firefight-feedback-plugin.general_feedback_slug'))->firstOrFail();
        $bot = User::findOrFail($this->settings->get('firefight-feedback-plugin.bot_id'));


        // Get params
        $parsedBody = $request->getParsedBody();

        $title = Arr::get($parsedBody, 'title', 'title undefined');
        $image_url = Arr::get($parsedBody, 'image_url', '');
        $description = Arr::get($parsedBody, 'description', 'descirption undefined');
        $coordinates = Arr::get($parsedBody, 'coordinates', '');
        $friendly_coordinates = Arr::get($parsedBody, 'friendly_coordinates', '');
        $type = intval(Arr::get($parsedBody, 'type', 0));
        $mood = intval(Arr::get($parsedBody, 'mood', 0));
        $timestamp = Arr::get($parsedBody, 'timestamp', 0);
        $uuid = Arr::get($parsedBody, 'uuid', 'f498513c-e8c8-4773-be26-ecfc7ed5185d');

        // do shit
        $discussion = Discussion::start($title, $bot);
        $discussion->save();

        $discussion->tags()->attach($feedbackTag->id);

        if ($type == 0) {
            $discussion->tags()->attach($generalFeedbackTag->id);
        } else if ($type == 1) {
            $discussion->tags()->attach($featureFeedbackTag->id);
        }

        $post = CommentPost::reply(
            $discussion->id,
            $description,
            $bot->id,
            "::0"
        );

        $post->save();

        $discussion->refreshCommentCount();
        $discussion->refreshParticipantCount();

        $discussion->update();

        // See https://docs.flarum.org/extend/api.html#api-endpoints for more information.
        return new JsonResponse([
            "foo" => $this->settings->get('firefight-feedback-plugin.general_feedback_slug')
        ]);
    }
}
