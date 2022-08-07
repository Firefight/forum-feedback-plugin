<?php

use Flarum\Extend;
use Flarum\Frontend\Document;
use Flarum\Discussion\Discussion;
use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Api\Controller\ShowUserController;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;

use Firefight\ForumFeedback\DiscussionReportData;
use Firefight\ForumFeedback\FirefightDiscussionSerializer;
use Firefight\ForumFeedback\UserUUID;
use Firefight\ForumFeedback\UserUuidSerializer;
use Firefight\ForumFeedback\Api\Controller\UUIDBindingController;
use Firefight\ForumFeedback\Api\Controller\TokenGenerationController;
use Firefight\ForumFeedback\Api\Controller\PostCreator;
use Firefight\ForumFeedback\Api\Controller\ListUUIDController;
use Firefight\ForumFeedback\Api\Controller\ShowUUIDController;
use Firefight\ForumFeedback\Api\Controller\DeleteUUIDController;
use Firefight\ForumFeedback\VerificationCode;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/dist/admin.js'),
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/dist/forum.js')
        ->css(__DIR__.'/src/less/forum.less'),
    (new Extend\Settings)
        ->serializeToForum('bindCommand', 'firefight-feedback-plugin.bind_command')
        ->serializeToForum('VerificationCodeTimeout', 'firefight-feedback-plugin.verification_code_timeout')
        ->default('firefight-feedback-plugin.bot_id', 1)
        ->default('firefight-feedback-plugin.verification_code_type', 'N')
        ->default('firefight-feedback-plugin.verification_code_timeout', 5 * 60 * 1000)
        ->default('firefight-feedback-plugin.bind_command', '/bind')
        ->default('firefight-feedback-plugin.feedback_slug', 'feedback')
        ->default('firefight-feedback-plugin.feature_feedback_slug', 'feature-feedback')
        ->default('firefight-feedback-plugin.general_feedback_slug', 'general-feedback'),
    (new Extend\Routes('api'))
        ->post('/bindAccount', 'bindAccount', UUIDBindingController::class)
        ->post('/generateUUIDAuthToken', 'generateUUIDAuthToken', TokenGenerationController::class)
        ->post('/submitFeedback', 'submitFeedback', PostCreator::class)
        ->get('/uuids', 'uuids.index', ListUUIDController::class)
        ->get('/uuids/{id}', 'uuids.show', ShowUUIDController::class)
        ->delete('/uuids/{id}', 'uuids.delete', DeleteUUIDController::class),
    (new Extend\Model(Discussion::class))
        ->hasOne('discussion_report_data', DiscussionReportData::class),

    (new Extend\Model(User::class))
        ->hasMany('user_uuid', UserUUID::class),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->hasMany('user_uuid', UserUuidSerializer::class),
    (new Extend\ApiController(ShowUserController::class))
        ->addInclude('user_uuid'),

    (new Extend\ApiController(ListDiscussionsController::class))
        ->setSerializer(FirefightDiscussionSerializer::class)
];
