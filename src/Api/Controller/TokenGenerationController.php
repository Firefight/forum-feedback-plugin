<?php

namespace Firefight\ForumFeedback\Api\Controller;

use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Server\RequestHandlerInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;

use Firefight\ForumFeedback\VerificationCode;

use Carbon\Carbon;

class TokenGenerationController implements RequestHandlerInterface
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }


    /**
     * {@inheritdoc}
     */
    public function handle(Request $request): Response
    {
        $actor = RequestUtil::getActor($request); // Gets the user, flarum likes to call the user an actor
        // Not sure why they do this because it would make you think that there is an actor concurrency
        // model occouring but that is indeed not the case and the purpouse of it is souly to confuse you
        // even more.
        

        $codeType = $this->settings->get('verification_code_type');


        VerificationCode::where('user_id', $actor->id)->delete();


        $verificationCode = new VerificationCode;

        if ($codeType = 'N') {
          // random_bytes() is a secure random so its safe to use for the code generation
          $verificationCode->code = base_convert(bin2hex(random_bytes(4)), 16, 10);
        } else {
          $verificationCode->code = base_convert(bin2hex(random_bytes(6)), 16, 36);
        }

        $verificationCode->user_id = $actor->id;

        $verificationCode->save();


        $date = Carbon::now();
        $date->addMilliseconds(intval($this->settings->get('verification_code_timeout')));

        $verificationCode->expires = $date->toISOString();


        return new JsonResponse([
          'code' => $verificationCode->code
        ]);
    }
}
