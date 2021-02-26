<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Groups;
use App\Models\Projects;
use App\Models\Students;

class HomeController extends Controller
{
    public function index() {
        $groupsTable = Groups::all();
        $projectsTable = Projects::with('groups')->get();
        $studentsTable = Students::all();

        return Inertia::render('Home/Index', ['groups' => $groupsTable, 'projects' => $projectsTable, 'students' => $studentsTable]);
    }
}
