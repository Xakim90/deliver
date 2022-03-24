<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\File;
use Illuminate\Support\Facades\Storage;

class FileUpload extends Controller
{
  public function createForm(){
    return view('file-upload');
  }

  public function fileUpload(Request $req){
        $req->validate([
        'file' => 'required|mimes:csv,txt,xlx,xls,jpg,xlsx,pdf|max:2048'
        ]);

        $fileModel = new File;

        if($req->file()) {
            // $path = getcwd();
            // echo "This Is Your Absolute Path: ";
            // echo $path;
            $fileName = time().'_'.$req->file->getClientOriginalName();
            $filePath = $req->file('file')->storeAs('uploads', $fileName, 'public');
 
            $fileModel->name = time().'_'.$req->file->getClientOriginalName();
            $fileModel->file_path = '/storage/' . $filePath;
            $fileModel->save();

            return response()->json($fileModel, 201);
            // return back()
            // ->with('success','File has been uploaded.')
            // ->with('file', $fileName);
        }
   }
   public function download(Request $request)
    {
        $file = File::where('id', $request->id)->firstOrFail();
        $pathToFile = storage_path('app/public/uploads/' . $file->name);
        return response()->download($pathToFile);
    }
   public function get(Request $request)
    {
        $file = File::where('id', $request->id)->firstOrFail();
        $pathToFile = storage_path('app/public/uploads/' . $file->name);
        return response()->file($pathToFile);
    }

}