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

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
    ]).vue({
        extractStyles: true,
        globalStyles: false
    }).webpackConfig({
        output: {
            chunkFilename: 'js/[name].js?id=[chunkhash]',
        },
        module: {
            rules: [
              {
                test: /\.(postcss)$/,
                use: [
                  'vue-style-loader',
                  { loader: 'css-loader', options: { importLoaders: 1 } },
                  'postcss-loader'
                ]
              }
            ],
          },
    }).browserSync('127.0.0.1:8000');
