<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TaskList>
 */
class TaskListFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'task_id' => \App\Models\Task::factory(),
            'name' => fake()->word(),
            'description' => fake()->sentence(),
            'status' => fake()->randomElement(['active', 'archived']),
            'is_favorite' => fake()->boolean(),
            'completed' => fake()->boolean(),
            'due_date' => fake()->optional()->dateTimeBetween('now', '+1 month'),
            'completed_at' => fake()->optional()->dateTime(),
            'priority' => fake()->randomElement(['low', 'medium', 'high']),
        ];
    }
}
