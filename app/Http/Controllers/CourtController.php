<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CourtController extends Controller
{
    public function index()
    {
        return Inertia::render('courts/index');
    }
}
