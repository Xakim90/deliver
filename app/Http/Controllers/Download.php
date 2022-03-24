<?php

namespace App\Http\Controllers;
    /**
 * download file
 * 
 * @param \Illuminate\Http\Request  $request
 *
 * @return \Illuminate\Auth\Access\Response
 */

use Illuminate\Http\Request;
use App\Models\File;

class Download extends Controller
{

    public function download(Request $request)
    {
        $file = File::where('id', $request->id)->firstOrFail();
        $pathToFile = storage_path('app/public/uploads/' . $book->cover);
        return response()->download($pathToFile);
        // $file = public_path(). "/images/test.jpg";

        // $headers = ['Content-Type: image/jpeg'];

        // if (file_exists($file)) {
        //     return \Response::download($file, 'plugin.jpg', $headers);
        // } else {
        //     echo('File not found.');
        // }
    }

}
