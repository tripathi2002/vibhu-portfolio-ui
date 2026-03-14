<?php

function vibhu_register_projects_cpt() {

    $labels = [
        'name' => 'Projects',
        'singular_name' => 'Project',
        'add_new' => 'Add New Project',
        'add_new_item' => 'Add New Project',
        'edit_item' => 'Edit Project',
        'new_item' => 'New Project',
        'view_item' => 'View Project',
        'search_items' => 'Search Projects',
        'not_found' => 'No projects found'
    ];

    $args = [
        'labels' => $labels,
        'public' => true,
        'menu_icon' => 'dashicons-portfolio',
        'supports' => ['title','editor','thumbnail'],
        'has_archive' => true,
        'rewrite' => ['slug' => 'projects'],
        'show_in_rest' => true
    ];

    register_post_type('project', $args);
}

add_action('init', 'vibhu_register_projects_cpt');