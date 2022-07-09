<?php

namespace Firefight\ForumFeedback;

use Flarum\Database\AbstractModel;
use Flarum\Database\ScopeVisibilityTrait;
use Flarum\Foundation\EventGeneratorTrait;
use Flarum\User\User;

class UserUUID extends AbstractModel
{
    // See https://docs.flarum.org/extend/models.html#backend-models for more information.
    
    protected $table = 'user_uuids';


    public function user() {
      return $this->belongsTo(User::class);
    }
}
