<?php

function vibhu_register_messages_cpt(){

    register_post_type('message', [
        'label' => 'Messages',
        'public' => false,
        'show_ui' => true,
        'menu_icon' => 'dashicons-email',
        'supports' => ['title']
    ]);

}

add_action('init','vibhu_register_messages_cpt');