<?php
//Register custom Gutenberg blocks
function theme_home_gutenberg_block()
{
    $version = time();
    //Register Main block
    wp_register_script('theme-home-main-block-script', get_template_directory_uri() . '/gutenberg/home/main.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-hooks'), $version);
    register_block_type('home/main', array('editor_script' => 'theme-home-main-block-script'));

    wp_register_script('theme-home-experience-block-script', get_template_directory_uri() . '/gutenberg/home/experience.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-hooks'), $version);
    register_block_type('home/experience', array('editor_script' => 'theme-home-experience-block-script'));

    wp_register_script('theme-home-always-block-script', get_template_directory_uri() . '/gutenberg/home/always.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-hooks'), $version);
    register_block_type('home/always', array('editor_script' => 'theme-home-always-block-script'));

    wp_register_script('theme-home-calculate-block-script', get_template_directory_uri() . '/gutenberg/home/calculate.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-hooks'), $version);
    register_block_type('home/calculate', array('editor_script' => 'theme-home-calculate-block-script'));

    wp_register_script('theme-home-started-block-script', get_template_directory_uri() . '/gutenberg/home/started.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-hooks'), $version);
    register_block_type('home/started', array('editor_script' => 'theme-home-started-block-script'));

    wp_register_script('theme-home-solution-block-script', get_template_directory_uri() . '/gutenberg/home/solution.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-hooks'), $version);
    register_block_type('home/solution', array('editor_script' => 'theme-home-solution-block-script'));

    wp_register_script('theme-home-partners-block-script', get_template_directory_uri() . '/gutenberg/home/partners.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-hooks'), $version);
    register_block_type('home/partners', array('editor_script' => 'theme-home-partners-block-script'));

    wp_register_script('theme-home-feature-block-script', get_template_directory_uri() . '/gutenberg/home/feature.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-hooks'), $version);
    register_block_type('home/feature', array('editor_script' => 'theme-home-feature-block-script'));

    wp_register_script('theme-home-customizable-block-script', get_template_directory_uri() . '/gutenberg/home/customizable.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-hooks'), $version);
    register_block_type('home/customizable', array('editor_script' => 'theme-home-customizable-block-script'));

    wp_register_script('theme-home-integrations-block-script', get_template_directory_uri() . '/gutenberg/home/integrations.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-hooks'), $version);
    register_block_type('home/integrations', array('editor_script' => 'theme-home-integrations-block-script'));

}

add_action('init', 'theme_home_gutenberg_block', 100);
