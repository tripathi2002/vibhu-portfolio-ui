<?php

function vibhu_portfolio_assets() {
    wp_enqueue_style('main-style', get_stylesheet_uri());
}

function vibhu_assets() {

    $env = defined('WP_ENV') ? WP_ENV : 'production';

    $asset_dir = ($env === 'development') ? 'dist' : 'assets';

    wp_enqueue_style(
        'vibhu-style',
        get_template_directory_uri() . '/' . $asset_dir . '/main.css',
        [],
        null
    );

    wp_enqueue_script(
        'vibhu-script',
        get_template_directory_uri() . '/' . $asset_dir . '/main.js',
        [],
        null,
        true
    );

}


add_action('wp_enqueue_scripts', 'vibhu_portfolio_assets');

add_action('wp_enqueue_scripts', 'vibhu_assets');

require_once get_template_directory() . '/inc/setup.php';
require_once get_template_directory() . '/inc/assets.php';

require_once get_template_directory() . '/inc/cpt/projects.php';
require_once get_template_directory() . '/inc/acf/projects-fields.php';