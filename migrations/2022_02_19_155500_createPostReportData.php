<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

// A user can own many UUIDs
return Migration::createTable('user_uuids', function (Blueprint $table) {
    $table->id();
    $table->unsignedInteger('user_id');
    $table->string('uuid')
            ->unique();

    $table->foreign('user_id')
            ->references('id')
            ->on('users')
            ->constrained()
            ->cascadeOnUpdate()
            ->cascadeOnDelete();
});
