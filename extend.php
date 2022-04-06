<?php

use Flarum\Extend;
use Flarum\Frontend\Document;
use Flarum\Discussion\Discussion;
use Flarum\Api\Controller\ListDiscussionsController;
use Firefight\ForumFeedback\DiscussionReportData;
use Firefight\ForumFeedback\FirefightDiscussionSerializer;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/dist/admin.js'),
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/dist/forum.js')
        ->css(__DIR__.'/src/less/forum.less'),
    (new Extend\Settings)
        ->serializeToForum('bindCommand', 'firefight-feedback-plugin.bind_command')
        ->serializeToForum('authCodeTimeout', 'firefight-feedback-plugin.auth_code_timeout')
        ->default('firefight-feedback-plugin.bot_id', 1)
        ->default('firefight-feedback-plugin.verification_code_type', 'N')
        ->default('firefight-feedback-plugin.verification_code_timeout', 5 * 60 * 1000)
        ->default('firefight-feedback-plugin.bind_command', '/bind')
        ->default('firefight-feedback-plugin.feedback_slug', 'feedback')
        ->default('firefight-feedback-plugin.feature_feedback_slug', 'feature-feedback')
        ->default('firefight-feedback-plugin.general_feedback_slug', 'general-feedback'),
    (new Extend\Routes('api'))
        ->post('/bindAccount', 'bindAccount', Firefight\ForumFeedback\Api\Controller\UUIDBindingController::class)
        ->post('/submitFeedback', 'submitFeedback', Firefight\ForumFeedback\Api\Controller\PostCreator::class),
    (new Extend\Model(Discussion::class))
        ->belongsTo('discussionReportData', DiscussionReportData::class, 'discussion_id', 'id'),
    (new Extend\ApiController(ListDiscussionsController::class))
        ->setSerializer(FirefightDiscussionSerializer::class)
];
