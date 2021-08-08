<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function index()
    {
        return Book::all();
    }
    public function show(Book $product)
	{
	    return $product;
	}

	public function store(Request $request)
	{
	   $this->validate($request, [
        'author' => 'required|string',
        'title' => 'required|max:255',
        'file' => 'binary',
        'published' => 'integer',
		'category_id' => 'integer',
        'description' => 'string',
        'price' => 'integer',
        'availability' => 'boolean',
		'photo' => 'binary',
		'selected' => 'boolean',
        'status' => 'string',
        'count' => 'integer'
    ]);
	    $book = Book::create($request->all());

	    return response()->json($book, 201);
	}

	public function update(Request $request, Book $book)
	{

	    $book->update($request->all());

	    return response()->json($book, 200);
	}

	public function delete(Book $book)
	{
	    $book->delete();

	    return response()->json(null, 204);
	}
}
