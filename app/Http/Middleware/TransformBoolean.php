<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class TransformBoolean
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $value = (
            $request->input('newtab') === '1' ||
            $request->input('newtab') === 'true'
        );
        $request->merge(['newtab' => $value]);
        return $next($request);
    }
}
