<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
        $groupsTable = DB::table('groups')->get();
        $projectsTable = DB::table('projects')->get();
        $studentsTable = DB::table('students')->get();

        return Inertia::render('Home/Index', ['groups' => $groupsTable, 'projects' => $projectsTable, 'students' => $studentsTable]);
    }
}
