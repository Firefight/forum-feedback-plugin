<?php

namespace Firefight\ForumFeedback;

use Flarum\Post\Post;
use Flarum\Database\AbstractModel;
use Flarum\Database\ScopeVisibilityTrait;
use Flarum\Foundation\EventGeneratorTrait;

class PostReportData extends AbstractModel
{
    // See https://docs.flarum.org/extend/models.html#backend-models for more information.
    
    protected $table = 'post_report_data';

    function post() {
        return $this->hasOne(Post::class);
    }
}
