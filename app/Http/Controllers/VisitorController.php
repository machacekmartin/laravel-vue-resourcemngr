<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Code;
use App\Models\Link;
use App\Models\File;

class VisitorController extends Controller
{
    public function getLinks(){
        return Link::all();
    }

    public function getFiles(){
        return File::all();
    }

    public function getCodes(){
        return Code::all();
    }
}
