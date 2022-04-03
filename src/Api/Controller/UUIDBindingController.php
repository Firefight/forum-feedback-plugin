<?php

namespace Firefight\ForumFeedback\Api\Controller;

use Laminas\Diactoros\Response\HtmlResponse;
use Psr\Http\Server\RequestHandlerInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class UUIDBindingController extends RequestHandlerInterface
{
    /**
     * {@inheritdoc}
     */
    public function handle(Request $request): Response
    {
        // See https://docs.flarum.org/extend/api.html#api-endpoints for more information.

        // return new Collection($data, $serializer);
        // return new Resource($data, $serializer);
        return new HtmlResponse('<h1>Hello world</h1>');
    }
}
