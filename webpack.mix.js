const mix = require('laravel-mix');

require('dotenv').config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

const theme = process.env.WP_THEME;

mix.setResourceRoot('../')
    .disableNotifications()
    .setPublicPath(path.normalize(`public/themes/${theme}/assets`))
    .js('resources/assets/scripts/app.js', 'scripts')
    .sass('resources/assets/styles/app.scss', 'styles');

mix.version();
