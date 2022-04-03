<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

// Creates the table to store a user's verification code
// A user should only have one code at a time
return Migration::createTable('verification_codes', function (Blueprint $table) {
    $table->id();
    $table->unsignedInteger('user_id')
        ->unique();
    $table->string('code')
        ->unique();
    $table->dateTime('expires');

    $table->foreign('user_id')
        ->references('id')
        ->on('users')
        ->constrained()
        ->cascadeOnUpdate()
        ->cascadeOnDelete();
});
