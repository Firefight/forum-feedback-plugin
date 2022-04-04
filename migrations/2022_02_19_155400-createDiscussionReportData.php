<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

// Defines if a UUID owns a message
// A post should only have one UUID
return Migration::createTable('discussion_report_data', function (Blueprint $table) {
    $table->id();
    $table->unsignedInteger('discussion_id')
            ->unique();
    $table->string('uuid');
    $table->string('image_url');
    $table->double('coord_x');
    $table->double('coord_y');
    $table->string('friendly_coordinates');
    $table->integer('type');
    $table->integer('mood');
    $table->dateTime('timestamp');

    $table->foreign('discussion_id')
            ->references('id')
            ->on('posts')
            ->constrained()
            ->cascadeOnUpdate()
            ->cascadeOnDelete();
});
