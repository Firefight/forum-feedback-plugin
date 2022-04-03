<?php

namespace Firefight\ForumFeedback;

use Flarum\Database\AbstractModel;
use Flarum\Database\ScopeVisibilityTrait;
use Flarum\Foundation\EventGeneratorTrait;

class VerificationCode extends AbstractModel
{
    // See https://docs.flarum.org/extend/models.html#backend-models for more information.
    
    protected $table = 'verification_codes';
}
