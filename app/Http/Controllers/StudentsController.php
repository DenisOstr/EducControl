<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentsController extends Controller
{
    public function index() {
        return Inertia::render('Students/Index');
    }
    
    public function add() {
        return Inertia::render('Students/Add');
    }

    public function change() {
        return Inertia::render('Students/Change');
    }

    public function remove() {
        return Inertia::render('Students/Remove');
    }
}
