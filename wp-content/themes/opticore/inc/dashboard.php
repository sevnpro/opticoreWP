<?php
//Add admin Dashboard style
function load_admin_style()
{
    $version = time();
    wp_enqueue_style('dashbord-style', get_template_directory_uri() . '/inc/dashbord-style.css', false, $version);
}

add_action('admin_enqueue_scripts', 'load_admin_style');
//
////Change Dashboard widget order
//function set_dashboard_meta_order()
//{
//    $id = get_current_user_id();
//    $meta_value = array(
//        'normal' => 'custom_home_widget',
//        'side' => 'custom_widget_widget'
//    );
//    update_user_meta($id, 'meta-box-order_dashboard', $meta_value);
//}
//
//add_action('admin_init', 'set_dashboard_meta_order');

//Remove defauld and add custom Dashboard widget
function custom_dashboard_widgets()
{
    global $wp_meta_boxes;

    //Deregister default WP dashbord widget
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_recent_drafts']);

    //Custom Dashboard widget
    wp_add_dashboard_widget('custom_home_widget', 'Home', 'custom_dashboard_home');
    wp_add_dashboard_widget('custom_home_widget9', 'Privacy policy', 'custom_dashboard_homePrivacy');
}

add_action('wp_dashboard_setup', 'custom_dashboard_widgets');

//Home page widget

function custom_dashboard_homePrivacy()
{
    echo '<div class="custom-admin-card">
        <svg width="62" class="custom-admin-card-icon" height="80" viewBox="0 0 62 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 21V1.48877C40 0.587569 41.0984 0.146207 41.722 0.796862L61.3786 21.3081C61.9879 21.9439 61.5373 23 60.6566 23H42C40.8954 23 40 22.1046 40 21Z" fill="#FBCA27"/>
<path d="M59 78.75H3C2.0335 78.75 1.25 77.9665 1.25 77V3C1.25 2.0335 2.0335 1.25 3 1.25H40.1982C40.6826 1.25 41.1454 1.45081 41.4763 1.80462L42.3821 0.957416L41.4763 1.80463L60.2781 21.9078C60.5813 22.232 60.75 22.6593 60.75 23.1032V77C60.75 77.9665 59.9665 78.75 59 78.75Z" stroke="#333333" stroke-width="2.5" stroke-linecap="round"/>
<path d="M11 54H50" stroke="#333333" stroke-width="2.5" stroke-linecap="round"/>
<path d="M11 61H50" stroke="#333333" stroke-width="2.5" stroke-linecap="round"/>
<path d="M11 40H50" stroke="#333333" stroke-width="2.5" stroke-linecap="round"/>
<path d="M11 33H50" stroke="#333333" stroke-width="2.5" stroke-linecap="round"/>
<path d="M11 26H31" stroke="#333333" stroke-width="2.5" stroke-linecap="round"/>
<path d="M11 47H50" stroke="#333333" stroke-width="2.5" stroke-linecap="round"/>
</svg>
<div class="custom-admin-card-title">Privacy policy</div>
		<div class="custom-admin-card-btn">
			<a href="/wp-admin/post.php?post=213&action=edit" class="button-widget">Edit Eng</a>
			<a href="/de/wp-admin/post.php?post=213&action=edit" class="button-widget">Edit De</a>
		</div>
	</div>';
}


function custom_dashboard_home()
{
    echo '
	<div class="custom-admin-card">
        <svg class="custom-admin-card-icon" width="75" height="80" viewBox="0 0 75 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M67.5294 41.2671C67.202 41.2671 66.8746 41.1288 66.5941 40.8983L36.3835 10.7888L6.07949 40.8983C5.61183 41.3594 4.72329 41.3594 4.25563 40.8983L0.374097 37.0251C-0.140324 36.5179 -0.140324 35.734 0.374097 35.2268L35.4482 0.321896C35.9159 -0.1392 36.8044 -0.1392 37.2721 0.321896L72.3462 35.2268C72.8606 35.734 72.8606 36.5179 72.3462 37.0251L68.4647 40.8983C68.2308 41.1288 67.9035 41.2671 67.5294 41.2671ZM36.3835 7.74553C36.7109 7.74553 37.0383 7.88385 37.3189 8.1144L67.5761 38.2239L69.6806 36.149L36.3835 3.04236L3.0865 36.149L5.19094 38.2239L35.4482 8.1144C35.6821 7.88385 36.0094 7.74553 36.3835 7.74553Z" fill="#333333"/>
<path d="M64.5831 74.4669H10.1013C9.11923 74.4669 8.32422 73.683 8.32422 72.7147V35.9193H10.8963V71.9308H62.011V35.9193H64.5831V74.4669Z" fill="#333333"/>
<path d="M63.0402 71.608H49.7588V74.1441H63.0402V71.608Z" fill="#333333"/>
<path d="M74.2171 63.6312V54.5476H70.85C70.4291 52.8876 69.7744 51.3199 68.8858 49.8444L71.2709 47.4928L64.7705 41.0836L62.3854 43.4352C60.8889 42.5591 59.2989 41.9136 57.6153 41.4986V38.1787H48.4025V41.4986C46.719 41.9136 45.129 42.5591 43.6325 43.4352L41.2474 41.0836L34.747 47.4928L37.132 49.8444C36.2435 51.3199 35.5888 52.8876 35.1679 54.5476H31.8008V63.6312H35.1679C35.5888 65.2911 36.2435 66.8588 37.132 68.3343L34.747 70.6859L41.2474 77.0951L43.6325 74.7436C45.129 75.6196 46.719 76.2652 48.4025 76.6802V80H57.6153V76.6802C59.2989 76.2652 60.8889 75.6196 62.3854 74.7436L64.7705 77.0951L71.2709 70.6859L68.8858 68.3343C69.7744 66.8588 70.4291 65.2911 70.85 63.6312H74.2171ZM53.0323 68.196C47.9349 68.196 43.8195 64.1384 43.8195 59.1124C43.8195 54.0865 47.9349 50.0289 53.0323 50.0289C58.1298 50.0289 62.2451 54.0865 62.2451 59.1124C62.2451 64.0923 58.1298 68.196 53.0323 68.196Z" fill="#FBCA27"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="74.2169" height="80" fill="white"/>
</clipPath>
</defs>
</svg>
<div class="custom-admin-card-title">Home page</div>
		<div class="custom-admin-card-btn">
			<a href="/wp-admin/post.php?post=' . get_option('page_on_front') . '&action=edit" class="button-widget">Edit Eng</a>
			<a href="/de/wp-admin/post.php?post=' . get_option('page_on_front') . '&action=edit" class="button-widget">Edit De</a>
		</div>
	</div>
	';
}
