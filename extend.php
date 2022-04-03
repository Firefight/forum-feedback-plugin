<?php

use Flarum\Extend;
use Flarum\Frontend\Document;

return [
    (new Extend\Frontend('admin'))
    ->js(__DIR__.'/dist/admin.js'),
    (new Extend\Frontend('forum'))
    ->js(__DIR__.'/dist/forum.js'),
    (new Extend\Settings)
    ->serializeToForum('bindCommand', 'firefight-feedback-plugin.bind_command')
    ->serializeToForum('authCodeTimeout', 'firefight-feedback-plugin.auth_code_timeout'),
    (new Extend\Routes('api'))
        ->post('/bindAccount', 'bindAccount', Firefight\ForumFeedback\Api\Controller\UUIDBindingController::class)
        ->post('/submitFeedback', 'submitFeedback', Firefight\ForumFeedback\Api\Controller\PostCreator::class)

];
