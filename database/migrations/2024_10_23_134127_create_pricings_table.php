<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pricings', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('service_id');
            $table->string('name');
            $table->string('price');
            $table->string('price_interval')->nullable();
            $table->json('sub_points')->nullable();
            $table->boolean('is_popular')->default(false);
            $table->timestamps();

            // Foreign key relation
            $table->foreign('service_id')->references('id')->on('services')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pricings');
    }
};
