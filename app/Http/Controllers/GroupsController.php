<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class GroupsController extends Controller
{
    public function index() {
        $groupsTable = DB::table('groups')->get();
        $topGroup = DB::table('groups')->select('group_code', 'group_name', 'score')->orderBy('score', 'desc')->first();

        return Inertia::render('Groups/Index', ['groups' => $groupsTable, 'topGroup' => $topGroup]);
    }

    public function add() {
        return Inertia::render('Groups/Add');
    }

    public function change() {
        return Inertia::render('Groups/Change');
    }

    public function remove() {
        return Inertia::render('Groups/Remove');
    }
}
