<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GroupsController extends Controller
{
    public function index() {
        return Inertia::render('Groups/Index');
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
