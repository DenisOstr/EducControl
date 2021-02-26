<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Groups extends Model
{
    use HasFactory;

    protected $table = 'groups';

    public function projects() {
        return $this->belongsTo(Projects::class);
    }

    public function students() {
        return $this->belongsTo(Students::class);
    }
}
