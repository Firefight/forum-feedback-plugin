<?php

namespace Firefight\ForumFeedback;

use Flarum\Api\Serializer\DiscussionSerializer;

class FirefightDiscussionSerializer extends DiscussionSerializer
{
    protected $type = 'discussions';

    protected function getDefaultAttributes($discussion)
    {
        $default = parent::getDefaultAttributes($discussion);

        $data = DiscussionReportData::where('discussion_id', $discussion->id)->first();

        if ($data != null) {
            return array_merge($default, [
                'report_data' => [
                'uuid' => $data->uuid,
                'image_url' => $data->image_url,
                'coord_x' => $data->coord_x,
                'coord_y' => $data->coord_y,
                'friendly_coordinates' => $data->friendly_coordinates,
                'type' => $data->type,
                'mood' => $data->mood,
                'timestamp' => $data->timestamp,
                ]
            ]);
        } else {
            return $default;
        }
    }
}
