<?php

function vibhu_portfolio_assets() {
    wp_enqueue_style('main-style', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'vibhu_portfolio_assets');