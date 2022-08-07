<?php
namespace Firefight\ForumFeedback\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;
use Firefight\ForumFeedback\UserUUIDSerializer;
use Firefight\ForumFeedback\UserUUID;

class ListUUIDController extends AbstractShowController
{
    public $serializer = UserUUIDSerializer::class;
    
    protected function data(Request $request, Document $document)
    {
        return UserUUID::all();
    }
}
