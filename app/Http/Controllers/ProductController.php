<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }
    public function show(Request $request)
	{
		$product = Product::where('id', $request->id)->get();
        return response()->json($product);
	}
    public function showCurrent(Request $request)
	{
		$product = Product::where($request->key, $request->val)->get();
        return response()->json($product);
	}

	public function get(Request $request)
	{
		$name = Product::where('name', $request->name)->get();
		// $name = $request->query('name');
		//var_dump($name);
		return response()->json($name);
	}

	public function store(Request $request)
	{
	   $this->validate($request, [
        'name' => 'required|max:255',
        'desc' => 'string',
        'price' => 'integer',
    ]);
	    $product = Product::create($request->all());

	    return response()->json($product, 201);
	}

	public function update(Request $request, Product $product)
	{

	    $product->update($request->all());

	    return response()->json($product, 200);
	}

	public function delete(Product $product)
	{
	    $product->delete();

	    return response()->json(null, 204);
	}
}
