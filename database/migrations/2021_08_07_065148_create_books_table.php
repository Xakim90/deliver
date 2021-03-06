<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('author');
            $table->string('title');
            $table->binary('file');            
            $table->integer('published');
            $table->integer('category_id');
            $table->text('description');
            $table->integer('price');
            $table->boolean('availability');
            $table->binary('photo');
            $table->boolean('selected')->default(false);
            $table->string('status');
            $table->integer('count');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
