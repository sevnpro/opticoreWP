<?php
//Clean header
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
remove_action('wp_head', 'rest_output_link_wp_head');
remove_action('wp_head', 'wp_oembed_add_discovery_links');
remove_action('template_redirect', 'rest_output_link_header', 11, 0);
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

//Disable xmlrpc
add_filter('xmlrpc_enabled', '__return_false');

//Admin only function
if (!is_admin()) {
    //    wp_enqueue_script('jquery');
    //jQuery deregister
    //    add_action('init', function () {
    //        wp_deregister_script('wp-embed'); //Deregister OEMBED js
    //        wp_deregister_script('jquery'); //Deregister WP jquery
    //    });
    //
    //    //Async and type script loading
    //    add_filter('script_loader_tag', function ($tag) {
    //        return str_replace("type='text/javascript'", "defer", $tag);
    //    }, 10, 2);
    //    add_filter('style_loader_tag', function ($tag) {
    //        return str_replace("type='text/css' ", "", $tag);
    //    }, 10, 2);
}
//else {
//Admin Dashboard
include_once('inc/dashboard.php');

//Gutenberg blocks
include_once('gutenberg/init.php');
//}

//Theme stylesheet and script.
function theme_style()
{
    $version = time();
    //    wp_enqueue_script('mainscripts', get_template_directory_uri() . '/src/js/app.min.js', array(), $version, true);
    wp_enqueue_script('jquery');
    wp_enqueue_script('mainscript', get_template_directory_uri() . '/js/script.js', array(), $version, true);
    wp_enqueue_script('touch', 'https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.19/jquery.touchSwipe.min.js', array(), $version, true);
    wp_enqueue_style('mainPageCss', get_template_directory_uri() . '/style.css', array(), $version);
    wp_enqueue_style('mainPageCssss', get_template_directory_uri() . '/src/css/app.min.css', array(), $version);
}

add_action('wp_enqueue_scripts', 'theme_style');

//Add thumbnail support
add_theme_support('post-thumbnails');

//Disable Gutenberg default style in front
function theme_deregister_gutenberg_styles()
{
    wp_dequeue_style('wp-block-library');
}

add_action('wp_print_styles', 'theme_deregister_gutenberg_styles', 100);

//Gutenberg editor style
function theme_gutenberg_editor_styles()
{
    add_theme_support('editor-styles');
    add_editor_style('gutenberg/editor-style.css');
}

add_action('after_setup_theme', 'theme_gutenberg_editor_styles');

//Enable svg support
function theme_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}

add_filter('upload_mimes', 'theme_mime_types');

//Link nofollow attribute
function theme_targeted_link_rel($rel_values)
{
    return 'nofollow noopener noreferrer';
}

add_filter('wp_targeted_link_rel', 'theme_targeted_link_rel', 20);

//Disable Wp heartbit
add_action('init', function () {
    wp_deregister_script('heartbeat');
}, 1);

//Unregister defaul WP widget
function unregister_default_widgets()
{
    unregister_widget('WP_Widget_Pages');
    unregister_widget('WP_Widget_Calendar');
    unregister_widget('WP_Widget_Recent_Comments');
    unregister_widget('WP_Widget_Archives');
    unregister_widget('WP_Widget_Categories');
    unregister_widget('WP_Widget_Media_Audio');
    unregister_widget('WP_Widget_Media_Video');
    unregister_widget('WP_Widget_Media_Gallery');
    unregister_widget('WP_Widget_Media_Image');
    unregister_widget('WP_Widget_RSS');
    unregister_widget('WP_Nav_Menu_Widget');
    unregister_widget('WP_Widget_Tag_Cloud');
    unregister_widget('WP_Widget_Search');
    unregister_widget('WP_Widget_Recent_Posts');
    unregister_widget('WP_Widget_Meta');
    unregister_widget('WP_Widget_Custom_HTML');
    unregister_widget('WP_Widget_Text');
}

add_action('widgets_init', 'unregister_default_widgets', 11);

//Add WP nav menu
register_nav_menus(array(
    'primary' => 'Main menu',
));

//Disable plugin update notification
function disable_updates_notification($value)
{
    unset($value->response['advanced-custom-fields-pro/acf.php']);
    return $value;
}

add_filter('site_transient_update_plugins', 'disable_updates_notification');


function remove_admin_login_header()
{
    remove_action('wp_head', '_admin_bar_bump_cb');
}

add_action('get_header', 'remove_admin_login_header');


function mytheme_custom_excerpt_length($length)
{
    return 18;
}

add_filter('excerpt_length', 'mytheme_custom_excerpt_length', 999);

function new_excerpt_more($more)
{
    return '';
}

add_filter('excerpt_more', 'new_excerpt_more');

function add_option_field_to_general_admin_page()
{
    $option_name = 'my_option';

    // регистрируем опцию
    register_setting('general', $option_name);

    // добавляем поле
    add_settings_field(
        'myprefix_setting-id',
        'Facebook Link',
        'myprefix_setting_callback_function',
        'general',
        'default',
        array(
            'id' => 'myprefix_setting-id',
            'option_name' => 'my_option'
        )
    );
}
add_action('admin_menu', 'add_option_field_to_general_admin_page');

function myprefix_setting_callback_function($val)
{
    $id = $val['id'];
    $option_name = $val['option_name'];
?>
    <input type="text" name="<? echo $option_name ?>" id="<? echo $id ?>" value="<? echo esc_attr( get_option($option_name) ) ?>" />
    <?
}

function add_option_field_to_general_admin_page1(){
    $option_name = 'my_option1';

    // регистрируем опцию
    register_setting( 'general', $option_name );

    // добавляем поле
    add_settings_field(
        'myprefix_setting-id1',
        'Instagram Link',
        'myprefix_setting_callback_function1',
        'general',
        'default',
        array(
            'id' => 'myprefix_setting-id1',
            'option_name' => 'my_option1'
        )
    );
}
add_action('admin_menu', 'add_option_field_to_general_admin_page1');

function myprefix_setting_callback_function1( $val ){
    $id = $val['id'];
    $option_name = $val['option_name'];
    ?>
    <input type="text" name="<?php echo $option_name ?>" id="<?php echo $id ?>" value="<?php echo esc_attr(get_option($option_name)) ?>" />
<?php
}

function add_option_field_to_general_admin_page2()
{
    $option_name = 'my_option2';

    // регистрируем опцию
    register_setting('general', $option_name);

    // добавляем поле
    add_settings_field(
        'myprefix_setting-id2',
        'Linkedin Link',
        'myprefix_setting_callback_function2',
        'general',
        'default',
        array(
            'id' => 'myprefix_setting-id2',
            'option_name' => 'my_option2'
        )
    );
}
add_action('admin_menu', 'add_option_field_to_general_admin_page2');

function myprefix_setting_callback_function2($val)
{
    $id = $val['id'];
    $option_name = $val['option_name'];
?>
    <input type="text" name="<?php echo $option_name ?>" id="<?php echo $id ?>" value="<?php echo esc_attr(get_option($option_name)) ?>" />
<?php
}

function add_option_field_to_general_admin_page3()
{
    $option_name = 'my_option3';

    // регистрируем опцию
    register_setting('general', $option_name);

    // добавляем поле
    add_settings_field(
        'myprefix_setting-id3',
        'Twitter Link',
        'myprefix_setting_callback_function3',
        'general',
        'default',
        array(
            'id' => 'myprefix_setting-id3',
            'option_name' => 'my_option3'
        )
    );
}
add_action('admin_menu', 'add_option_field_to_general_admin_page3');

function myprefix_setting_callback_function3($val)
{
    $id = $val['id'];
    $option_name = $val['option_name'];
?>
    <input type="text" name="<?php echo $option_name ?>" id="<?php echo $id ?>" value="<?php echo esc_attr(get_option($option_name)) ?>" />
<?php
}


function jm_update_notice()
{
    remove_action('load-update-core.php', 'wp_update_plugins');
}
add_filter('pre_site_transient_update_plugins', '__return_null');


function ultrabootstrap_setup()
{
    /*
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     * If you're building a theme based on ultrabootstrap, use a find and replace
     * to change 'ultrabootstrap' to the name of your theme in all the template files
     */

    // This theme uses wp_nav_menu() in one location.
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'ultrabootstrap'),
        'secondary' => esc_html__('Footer Menu', 'ultrabootstrap'),
    ));

    /*
    /*
     * Enable support for Post Formats.
     * See http://codex.wordpress.org/Post_Formats
     */

    /*
     * Enable support for Selective Refresh for Widgets.
     * See https://make.wordpress.org/core/2016/11/10/visible-edit-shortcuts-in-the-customizer-preview/
     */
    add_theme_support('customize-selective-refresh-widgets');

    add_editor_style();
}
add_action('after_setup_theme', 'ultrabootstrap_setup');
