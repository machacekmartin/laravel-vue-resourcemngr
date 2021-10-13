<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Link;
use App\Models\Code;
use App\Models\File;

class EditorController extends Controller
{

    // Links
    public function createLink(Request $request){
        $data = $this->validateLink($request, false);
        return Link::create($data);
    }

    public function editLink(Request $request, $id){
        $link = Link::find($id);
        $data = $this->validateLink($request, true);
        $link->update($data);
        return Link::find($id);
    }

    public function deleteLink(Request $request, $id){
        return Link::destroy($id);
    }

    // Codes
    public function createCode(Request $request){
        $data = $this->validateCode($request, false);
        return Code::create($data);
    }

    public function editCode(Request $request, $id){
        $code = Code::find($id);
        $data = $this->validateCode($request, true);
        $code->update($data);
        return Code::find($id);
    }

    public function deleteCode(Request $request, $id){
        return Code::destroy($id);
    }

    // Files
    public function createFile(Request $request){
        $data = $this->validateFile($request, false);
        $data['file'] = time() . '-' . $request->file->getClientOriginalName();
        Storage::disk('public')->putFileAs('', $request->file, $data['file']);
        return File::create($data);
    }

    public function editFile(Request $request, $id){
        $file = File::find($id);

        $data = $this->validateFile($request, true);

        if ($request->file){
            $data['file'] = time() . '-' . $request->file->getClientOriginalName();

            if (Storage::disk('public')->exists($file->file)){
                Storage::disk('public')->delete($file->file);
            }

            Storage::disk('public')->putFileAs('', $request->file, $data['file']);
        }
        
        $file->update($data);
        return File::find($id);
    }

    public function deleteFile(Request $request, $id){
        $file = File::find($id);

        if(Storage::disk('public')->exists($file->file)){
            Storage::disk('public')->delete($file->file);
        }

        return File::destroy($id);
    }

    //Validators
    private function validateFile(Request $request, $editing){
        $data = $request->validate([
            'title' =>  $editing ? 'max:100' : 'required|max:100',
            'file' =>  $editing ? 'mimes:pdf|max:10000' : 'required|mimes:pdf|max:10000',
        ]);

        return $data;
    }
    private function validateCode(Request $request, $editing){
        $data = $request->validate([
            'title' =>  $editing ? 'max:100' : 'required|max:100',
            'description' =>  $editing ? 'max:400' : 'required|max:400',
            'snippet' =>  $editing ? '' : 'required'
        ]);

        return $data;
    }

    private function validateLink(Request $request, $editing){
        if ($request->has('newtab')){
            $value = (int)(
                $request->input('newtab') === '1' ||
                $request->input('newtab') === 'true' ||
                $request->input('newtab') === true ||
                $request->input('newtab') === 1
            );
            $request->merge(['newtab' => $value]);
        }
        
        $data = $request->validate([
            'title' =>  $editing ? 'max:100' : 'required|max:100',
            'path' =>  $editing ? 'max:100' : 'required|max:100',
            'newtab' =>  $editing ? 'boolean' : 'required|boolean'
        ]);
        return $data;
    }
}
