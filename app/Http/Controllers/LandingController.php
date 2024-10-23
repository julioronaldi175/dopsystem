<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function index()
    {
        return Inertia::render('Landing/Home');
    }

    public function index_pricing()
    {
        return Inertia::render('Landing/Pricing');
    }

    public function index_joinus()
    {
        return Inertia::render('Landing/JoinUs');
    }

    public function index_contact()
    {
        return Inertia::render('Landing/Contact');
    }

    public function index_about()
    {
        return Inertia::render('Landing/About');
    }


    public function index_services($id)
    {
        // Find the service by ID
        $service = Service::findOrFail($id);

        // Pass the service details to Inertia for the frontend
        return Inertia::render('Landing/Service', [
            'service' => $service,
            'features' => json_decode($service->features, true), // Pass the features array
        ]);
    }

    public function index_privacy()
    {
        return Inertia::render('Landing/Privacy');
    }
}
