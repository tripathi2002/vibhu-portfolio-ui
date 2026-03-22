<?php

function vibhu_portfolio_assets()
{
    wp_enqueue_style('main-style', get_stylesheet_uri());
}

function vibhu_assets()
{

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

function vibhu_handle_contact_form()
{

    if (isset($_POST['submit_contact'])) {

        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);
        $subject = sanitize_text_field($_POST['subject']);
        $message = sanitize_textarea_field($_POST['message']);

        $post_id = wp_insert_post([
            'post_type' => 'message',
            'post_title' => $name . ' - ' . date('d M Y'),
            'post_status' => 'pending'
        ]);

        if ($post_id) {

            update_post_meta($post_id, 'name', $name);
            update_post_meta($post_id, 'email', $email);
            update_post_meta($post_id, 'subject', $subject);
            update_post_meta($post_id, 'message', $message);

        }

    }

}

add_filter('acf/settings/save_json', function() {
    return get_stylesheet_directory() . '/acf-json';
});

add_filter('acf/settings/load_json', function($paths) {
    $paths[] = get_stylesheet_directory() . '/acf-json';
    return $paths;
});

add_action('wp_enqueue_scripts', 'vibhu_portfolio_assets');
add_action('wp_enqueue_scripts', 'vibhu_assets');
add_action('init','vibhu_handle_contact_form');

require_once get_template_directory() . '/inc/setup.php';
require_once get_template_directory() . '/inc/assets.php';
require_once get_template_directory() . '/inc/menus.php';

require_once get_template_directory() . '/inc/cpt/projects.php';
require_once get_template_directory() . '/inc/cpt/messages.php';

// require_once get_template_directory() . '/inc/acf/projects-fields.php';