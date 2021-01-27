<?php

/*
Plugin Name: Popup Fields
description: Edit Setting up configurable fields popups.
Author: Opticore
Version: 1.0.0
*/

class Smashing_Fields_Plugin
{

    public function __construct()
    {
        // Hook into the admin menu
        add_action('admin_menu', array($this, 'create_plugin_settings_page'));
        add_action('admin_init', 'my_general_section');


        function my_general_section()
        {
            add_settings_section(
                'my_settings_section', // Section ID
                'Modal window for email collection', // Section Title
                'my_section_options_callback', // Callback
                'smashing_fields' // What Page?  This makes the section show up on the General Settings Page
            );

            add_settings_field( // Option 1
                'popup_1', // Option ID
                'Title', // Label
                'my_textbox_callback', // !important - This is where the args go!
                'smashing_fields', // Page it will be displayed (General Settings)
                'my_settings_section', // Name of our section
                array( // The $args
                    'popup_1' // Should match Option ID
                )
            );

            add_settings_field( // Option 2
                'popup_2', // Option ID
                'Placeholder', // Label
                'my_textbox_callback', // !important - This is where the args go!
                'smashing_fields', // Page it will be displayed
                'my_settings_section', // Name of our section (General Settings)
                array( // The $args
                    'popup_2' // Should match Option ID
                )
            );

            add_settings_field( // Option 1
                'popup_3', // Option ID
                'Button text', // Label
                'my_textbox_callback', // !important - This is where the args go!
                'smashing_fields', // Page it will be displayed (General Settings)
                'my_settings_section', // Name of our section
                array( // The $args
                    'popup_3' // Should match Option ID
                )
            );

            add_settings_section(
                'my_settings_section2', // Section ID
                'Modal window for contact', // Section Title
                '', // Callback
                'smashing_fields' // What Page?  This makes the section show up on the General Settings Page
            );

            add_settings_field( // Option 2
                'popup_4', // Option ID
                'Title', // Label
                'my_textbox_callback', // !important - This is where the args go!
                'smashing_fields', // Page it will be displayed
                'my_settings_section2', // Name of our section (General Settings)
                array( // The $args
                    'popup_4' // Should match Option ID
                )
            );
            add_settings_field( // Option 1
                'popup_5', // Option ID
                'Placeholder Name', // Label
                'my_textbox_callback', // !important - This is where the args go!
                'smashing_fields', // Page it will be displayed (General Settings)
                'my_settings_section2', // Name of our section
                array( // The $args
                    'popup_5' // Should match Option ID
                )
            );

            add_settings_field( // Option 2
                'popup_6', // Option ID
                'Placeholder Phone', // Label
                'my_textbox_callback', // !important - This is where the args go!
                'smashing_fields', // Page it will be displayed
                'my_settings_section2', // Name of our section (General Settings)
                array( // The $args
                    'popup_6' // Should match Option ID
                )
            );

            add_settings_field( // Option 2
                'popup_7', // Option ID
                'Placeholder Email', // Label
                'my_textbox_callback', // !important - This is where the args go!
                'smashing_fields', // Page it will be displayed
                'my_settings_section2', // Name of our section (General Settings)
                array( // The $args
                    'popup_7' // Should match Option ID
                )
            );

            add_settings_field( // Option 1
                'popup_8', // Option ID
                'Button text', // Label
                'my_textbox_callback', // !important - This is where the args go!
                'smashing_fields', // Page it will be displayed (General Settings)
                'my_settings_section2', // Name of our section
                array( // The $args
                    'popup_8' // Should match Option ID
                )
            );

            add_settings_field( // Option 1
                'popup_11', // Option ID
                'Text phone', // Label
                'my_textbox_callback', // !important - This is where the args go!
                'smashing_fields', // Page it will be displayed (General Settings)
                'my_settings_section2', // Name of our section
                array( // The $args
                    'popup_11' // Should match Option ID
                )
            );

            add_settings_field( // Option 1
                'popup_12', // Option ID
                'Phone', // Label
                'my_textbox_callback', // !important - This is where the args go!
                'smashing_fields', // Page it will be displayed (General Settings)
                'my_settings_section2', // Name of our section
                array( // The $args
                    'popup_12' // Should match Option ID
                )
            );


            add_settings_section(
                'my_settings_section3', // Section ID
                'Popup Thank you', // Section Title
                '', // Callback
                'smashing_fields' // What Page?  This makes the section show up on the General Settings Page
            );

            add_settings_field( // Option 2
                'popup_9', // Option ID
                'Title', // Label
                'my_textbox_callback', // !important - This is where the args go!
                'smashing_fields', // Page it will be displayed
                'my_settings_section3', // Name of our section (General Settings)
                array( // The $args
                    'popup_9' // Should match Option ID
                )
            );

            add_settings_field( // Option 1
                'popup_10', // Option ID
                'Text', // Label
                'my_textbox_callback', // !important - This is where the args go!
                'smashing_fields', // Page it will be displayed (General Settings)
                'my_settings_section3', // Name of our section
                array( // The $args
                    'popup_10' // Should match Option ID
                )
            );



            register_setting('smashing_fields', 'popup_1', 'esc_attr');
            register_setting('smashing_fields', 'popup_2', 'esc_attr');
            register_setting('smashing_fields', 'popup_3', 'esc_attr');
            register_setting('smashing_fields', 'popup_4', 'esc_attr');
            register_setting('smashing_fields', 'popup_5', 'esc_attr');
            register_setting('smashing_fields', 'popup_6', 'esc_attr');
            register_setting('smashing_fields', 'popup_7', 'esc_attr');
            register_setting('smashing_fields', 'popup_8', 'esc_attr');
            register_setting('smashing_fields', 'popup_9', 'esc_attr');
            register_setting('smashing_fields', 'popup_10', 'esc_attr');
            register_setting('smashing_fields', 'popup_11', 'esc_attr');
            register_setting('smashing_fields', 'popup_12', 'esc_attr');
        }

        function my_section_options_callback()
        { // Section Callback
            echo '<h2></h2>';
            ?>
            <style>
                .update-nag {
                    display: none !important;
                }
                .formTranslate{
                    display: flex;
                    flex-flow: wrap;
                    justify-content: center;
                    padding: 30px 0;
                }

                .formTranslate form{
                    border: 1px solid #000;
                    padding: 30px;
                }
                .formTranslate form input[type="text"]{
                    min-width: 300px;
                }

                .formTranslate form h2{
                    text-align: center;
                    text-decoration: underline;
                }
            </style>
            <?php
        }


        function my_textbox_callback($args)
        {  // Textbox Callback
            $option = get_option($args[0]);
            echo '<input type="text" id="' . $args[0] . '" name="' . $args[0] . '" value="' . $option . '" />';
        }

    }


    public function create_plugin_settings_page()
    {
        // Add the menu item and page
        $page_title = 'Popup setting';
        $menu_title = 'Popup setting';
        $capability = 'manage_options';
        $slug = 'smashing_fields';
        $callback = array($this, 'plugin_settings_page_content');
        $icon = 'dashicons-admin-plugins';
        $position = 100;

        add_menu_page($page_title, $menu_title, $capability, $slug, $callback, $icon, $position);
    }

    public function plugin_settings_page_content()
    {
        ?>
        <div class="wrap formTranslate" >
            <form method="post" action="options.php">
                <?php
                settings_fields('smashing_fields');
                do_settings_sections('smashing_fields');
                submit_button();
                ?>
            </form>
        </div> <?php
    }

// Our code will go here
}


new Smashing_Fields_Plugin();
