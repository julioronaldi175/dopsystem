<?php

namespace App\Http\Controllers;

use App\Models\Pricing;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PricingController extends Controller
{
    public function get()
    {
        // Group pricings by service_id and eager load related service
        $pricings = Pricing::with('service')->get()->groupBy('service_id');

        // Retrieve all services in one go and index them by id
        $services = Service::all()->keyBy('id');

        // Prepare the data with the added service_name
        $groupedPricings = $pricings->map(function ($group, $service_id) use ($services) {
            $serviceName = $services[$service_id]->name ?? 'Unknown Service'; // Avoid extra query for each service_id
            return [
                'service_name' => $serviceName,
                'pricing' => $group->values() // Collect the pricing records for this service
            ];
        })->toArray();

        // dd($groupedPricings);

        return response()->json([
            'pricings' => $groupedPricings
        ]);
    }


    public function index()
    {
        return Inertia::render('Landing/Pricing');
    }
}
