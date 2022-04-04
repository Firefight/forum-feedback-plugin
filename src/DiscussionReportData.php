<?php

namespace Firefight\ForumFeedback;

use Flarum\Discussion\Discussion;
use Flarum\Database\AbstractModel;
use Flarum\Database\ScopeVisibilityTrait;
use Flarum\Foundation\EventGeneratorTrait;

class DiscussionReportData extends AbstractModel
{
    // See https://docs.flarum.org/extend/models.html#backend-models for more information.
    
    protected $table = 'discussion_report_data';

    function discussion() {
        return $this->hasOne(Discussion::class);
    }
}
