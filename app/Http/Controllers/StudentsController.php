<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Students;

class StudentsController extends Controller
{
    public function index() {
        $studentsTable = Students::all();

        return Inertia::render('Students/Index', ['students' => $studentsTable]);
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
