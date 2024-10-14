<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function index()
    {
        $appName = config('app.name');
        $appCompany = config('app.company');
        $appAddress = config('app.address');

        return Inertia::render('Landing/Home', [
            'appName' => $appName,
            'appCompany' => $appCompany,
            'appAddress' => $appAddress,
        ]);
    }
}
