<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        $appName = config('app.name');
        $appCompany = config('app.company');
        $appAddress = config('app.address');
        $appDesc = config('app.description');

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],

            'appName' => $appName,
            'appCompany' => $appCompany,
            'appAddress' => $appAddress,
            'appDesc' => $appDesc,
        ];
    }
}
