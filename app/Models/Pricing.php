<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pricing extends Model
{
    use HasFactory;

    // Fillable attributes to allow mass assignment
    protected $fillable = ['service_id', 'name', 'price', 'price_interval', 'sub_points', 'is_popular'];

    // Cast 'sub_points' as an array when retrieving/storing data
    protected $casts = [
        'sub_points' => 'array',
    ];

    // Define the relationship to the Service model
    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
