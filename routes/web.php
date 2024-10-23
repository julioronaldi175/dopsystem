<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [LandingController::class, 'index'])->name('home');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.home');
Route::get('/services/{id}', [LandingController::class, 'index_services'])->name('landing.services');
Route::get('/pricing', [LandingController::class, 'index_pricing'])->name('landing.pricing');
Route::get('/join-us', [LandingController::class, 'index_join'])->name('landing.joinus');
Route::get('/contact-us', [LandingController::class, 'index_contact'])->name('landing.contact');
Route::get('/about-us', [LandingController::class, 'index_about'])->name('landing.about');
Route::get('/privacy-policy', [LandingController::class, 'index_privacy'])->name('landing.privacy');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
