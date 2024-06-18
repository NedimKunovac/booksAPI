<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    protected $model = Book::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence(4),
            'author' => $this->faker->name,
            'description' => $this->faker->paragraph,
            'publication_year' => $this->faker->numberBetween(1900, 2023),
            'cover_image' => $this->faker->imageUrl(),
        ];
    }
}
