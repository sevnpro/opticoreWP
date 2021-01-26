<?php
//Register custom block category

function theme_block_category($categories, $post)
{
    return array_merge(
        $categories,
        array(
            array('slug' => 'home-page', 'title' => 'Home page'),

        )
    );
}

add_filter('block_categories', 'theme_block_category', 10, 2);

//Remove default block
function theme_allowed_block_types($allowed_blocks) {
	return array(
		'home/main',
        'home/experience',
        'home/always',
        'home/calculate',
        'home/started',
        'home/solution',
        'home/partners',
        'home/feature',
        'home/customizable',
        'home/integrations',
        'core/paragraph',
        'core/heading',
        'core/list'
	);
}
add_filter('allowed_block_types', 'theme_allowed_block_types');

require_once 'home/init.php';
