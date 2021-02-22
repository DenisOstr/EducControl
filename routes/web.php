<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\GroupsController;
use App\Http\Controllers\StudentsController;

Route::get('/', [HomeController::class, 'index']) -> name('home');
Route::get('/groups', [GroupsController::class, 'index']) -> name('groups');
Route::get('/students', [StudentsController::class, 'index']) -> name('students');

Route::get('/groups/add', [GroupsController::class, 'add']) -> name('groups.add');
Route::get('/groups/change', [GroupsController::class, 'change']) -> name('groups.change');
Route::get('/groups/remove', [GroupsController::class, 'remove']) -> name('groups.remove');

Route::get('/students/add', [StudentsController::class, 'add']) -> name('students.add');
Route::get('/students/change', [StudentsController::class, 'change']) -> name('students.change');
Route::get('/students/remove', [StudentsController::class, 'remove']) -> name('students.remove');