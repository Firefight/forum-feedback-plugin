<?php

namespace Firefight\ForumFeedback\Api\Controller;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\EmptyResponse;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Server\RequestHandlerInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Flarum\Discussion\Discussion;
use Flarum\User\User;
use Firefight\ForumFeedback\DiscussionReportData;
use Firefight\ForumFeedback\VerificationCode;
use Firefight\ForumFeedback\UserUUID;
use Carbon\Carbon;

class UUIDBindingController implements RequestHandlerInterface
{
    /**
     * {@inheritdoc}
     */
    public function handle(Request $request): Response
    {
        $parsedBody = $request->getParsedBody();

        $uuid = Arr::get($parsedBody, 'uuid');
        $authCode = Arr::get($parsedBody, 'code');

        if (!$uuid || !$authCode) {
            return new EmptyResponse(422);
        }


        $authCode = VerificationCode::where('code', $authCode)->where('expires', '>', Carbon::now())->first();

        $reports = DiscussionReportData::where('uuid', $uuid)->get();

        return new JsonResponse($reports);
    
        foreach ($reports as $report) {
            $report->discussion->user_id = $authCode->user_id;
            $report->discussion->save();
        }


        $user = User::findOrFail($authCode->user_id);

        $userUUID = UserUUID::where('uuid', $uuid)->first();

        if (!$userUUID) {
            $userUUID = new UserUUID;

            $userUUID->user_id = $user->id;
            $userUUID->uuid = $uuid;

            $userUUID->save();

            $user->user_uuid()->save($userUUID);
        } else {
            $userUUID->user_id = $user->id;

            $userUUID->save();
        }


        return new EmptyResponse(204);
    }
}
