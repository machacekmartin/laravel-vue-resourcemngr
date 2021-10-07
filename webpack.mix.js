const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix .disableNotifications()
    .copy('resources/icons/icon-set.svg', 'public/icons')
    .js('resources/vue/app.js', 'vue/app.js').vue()
    .sass('resources/styles/app.scss', 'public/styles/app.css')
    .browserSync('127.0.0.1:8000')
