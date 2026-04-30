<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Court extends Model
{
    protected $fillable = [
        'name',
        'sport_id',
        'capacity',
        'default_duration',
        'is_active'
    ];

    public function sport()
    {
        return $this->belonsTo(Sport::class);
    }
}
