<?php

namespace Firefight\ForumFeedback;

use Flarum\Api\Serializer\AbstractSerializer;

class UserUuidSerializer extends AbstractSerializer
{
    protected $type = 'user_uuid_data';

    protected function getDefaultAttributes($data)
    {
        return [
            'uuid' => $data->uuid,
            'user_id' => $data->user_id
        ];
    }
}
