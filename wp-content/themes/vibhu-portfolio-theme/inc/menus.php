<?php

function vibhu_register_menus() {

    register_nav_menus([
        'primary_menu' => 'Primary Menu',
        'footer_menu'  => 'Footer Menu'
    ]);

}

add_action('after_setup_theme', 'vibhu_register_menus');