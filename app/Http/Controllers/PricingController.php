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

        return response()->json(compact('pricings'));
    }



    public function index()
    {
        return Inertia::render('Landing/Pricing');
    }
}
