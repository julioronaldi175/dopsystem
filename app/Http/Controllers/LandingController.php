<?php

namespace App\Http\Controllers;

use App\Models\Pricing;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function index()
    {
        return Inertia::render('Landing/Home', [
            'pricings' => $this->getPricings(),
        ]);
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

    public function getPricings()
    {
        // Group pricings by service_id and eager load related service
        $pricings = Pricing::with('service')->get()->groupBy('service_id');

        // Retrieve all services in one go and index them by id
        $services = Service::all()->keyBy('id');

        // Prepare the data with the added service_name and decoded sub_points
        $pricings = $pricings->map(function ($group, $service_id) use ($services) {
            $serviceName = $services[$service_id]->name ?? 'Unknown Service'; // Avoid extra query for each service_id

            // Map each pricing entry to include decoded sub_points
            $pricingWithDecodedSubPoints = $group->map(function ($pricing) {
                $pricing->is_popular = $pricing->is_popular === '1' || $pricing->is_popular === 1;
                $pricing->sub_points = json_decode($pricing->sub_points, true); // Decode the JSON
                return $pricing;
            });

            return [
                'service_name' => $serviceName,
                'service_id' => $service_id,
                'pricing' => $pricingWithDecodedSubPoints->values(),
            ];
        });

        return $pricings;
    }

    public function index_privacy()
    {
        return Inertia::render('Landing/Privacy');
    }
}
