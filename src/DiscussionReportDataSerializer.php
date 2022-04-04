<?php

namespace Firefight\ForumFeedback;

use Flarum\Api\Serializer\AbstractSerializer;

class DiscussionReportDataSerializer extends AbstractSerializer
{
    protected $type = 'discussion_report_data';

    protected function getDefaultAttributes($data)
    {
        return [
            'uuid' => $data->uuid,
            'image_url' => $data->image_url,
            'coord_x' => $data->coord_x,
            'coord_y' => $data->coord_y,
            'friendly_coordinates' => $data->friendly_coordinates,
            'type' => $data->type,
            'mood' => $data->mood,
            'timestamp' => $data->timestamp,
        ];
    }
}
