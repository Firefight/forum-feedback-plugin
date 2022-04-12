<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;

// Defines if a UUID owns a message
// A post should only have one UUIDMigration::createTable('discussion_report_data',
return [
    'up' => function (Builder $schema) {
        $schema->table('discussion_report_data', function (Blueprint $table) {
            $table->dropForeign('discussion_report_data_discussion_id_foreign');

            $table->foreign('discussion_id')
                        ->references('id')
                        ->on('discussions')
                        ->constrained()
                        ->cascadeOnUpdate()
                        ->cascadeOnDelete();
        });
    },
    'down' => function (Builder $schema) {
        $schema->table('discussion_report_data', function (Blueprint $table) {
            $table->dropForeign('discussion_report_data_discussion_id_foreign');

            $table->foreign('discussion_id')
                        ->references('id')
                        ->on('posts')
                        ->constrained()
                        ->cascadeOnUpdate()
                        ->cascadeOnDelete();
        });
    }
];
