<?php

namespace App\Http\Controllers;

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
}
