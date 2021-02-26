<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Students;

class StudentsController extends Controller
{
    public function index() {
        $studentsTable = Students::with('groups')->get();

        return Inertia::render('Students/Index', ['students' => $studentsTable]);
    }

    public function search(Request $request) {
        $search = $request->get('search');

        $studentsTable = Students::with('groups')->select('*')
            ->where('student_code', 'LIKE', "%{$search}%")
            ->orWhere('name', 'LIKE', "%{$search}%")
            ->orWhere('surname', 'LIKE', "%{$search}%")
            ->orWhere('course', 'LIKE', "%{$search}%")
            ->orWhereHas('groups', function($q) use($search) { $q->where('group_code', 'LIKE', "%{$search}%"); })
            ->orWhere('score', 'LIKE', "%{$search}%")
            ->orWhere('position', 'LIKE', "%{$search}%")
            ->orWhere('group_projects', 'LIKE', "%{$search}%")
            ->orWhere('main_project', 'LIKE', "%{$search}%")
            ->get();

        // $studentsTable = Students::select('*')->whereLike('student_code', 'LIKE', "%{$search}%")->get();

        // $studentsTable = Students::select('*')->where([
        //     ['student_code', '=', "%{$search}%"],
        //     ['name', '=', "%{$search}%"],
        //     ['surname', '=', "%{$search}%"],
        //     ['course', '=', "%{$search}%"],
        //     ['group_code', '=', "%{$search}%"],
        //     ['score', '=', "%{$search}%"],
        //     ['position', '=', "%{$search}%"],
        //     ['group_projects', '=', "%{$search}%"],
        //     ['main_project', '=', "%{$search}%"]
        // ])->get();

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
