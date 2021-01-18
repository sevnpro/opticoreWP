<?php
/*
Template Name: Home page
*/
get_header();
?>

<main>
    <div id="top-zone"></div>
    <div id="bottom-zone"></div>
    <?php
    the_post();
    the_content();
    ?>
</main>


<?php get_footer(); ?>
