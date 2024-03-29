<?php

namespace Firefight\ForumFeedback;

use Flarum\Api\Serializer\AbstractSerializer;

class UserUuidSerializer extends AbstractSerializer
{
    protected $type = 'user_uuid';

    protected function getDefaultAttributes($data)
    {
        return [
            'id' => $data->id,
            'uuid' => $data->uuid,
            'user_id' => $data->user_id
        ];
    }
}
