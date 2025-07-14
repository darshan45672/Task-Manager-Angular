<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskList extends Model
{
    /** @use HasFactory<\Database\Factories\TaskListFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'task_id',
        'name',
        'description',
        'status',
        'is_favorite',
        'completed',
        'due_date',
        'completed_at',
        'priority',
    ];

    /**
     * The attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'due_date' => 'datetime',
            'completed_at' => 'datetime',
            'completed' => 'boolean',
            'is_favorite' => 'boolean',
        ];
    }
    /**
     * Get the task that owns the task list.
     */
    public function task()
    {
        return $this->belongsTo(Task::class);
    }
}
