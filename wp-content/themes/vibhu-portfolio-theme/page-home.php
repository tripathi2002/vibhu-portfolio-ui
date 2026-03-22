<?php get_header(); ?>

<div class="container">
    <div class="row justify-left">
        <aside class="col3 colmd3">
            <?php get_template_part('template-parts/sidebar/profile'); ?>
        </aside>
        <main class="col8 colmd8">
            <?php get_template_part('template-parts/sections/hero'); ?>
            <?php // get_template_part('template-parts/sections/services'); ?>
            <?php get_template_part('template-parts/sections/education'); ?>
            <?php get_template_part('template-parts/sections/work-history'); ?>
            <?php get_template_part('template-parts/sections/contact'); ?>
            <?php // get_template_part('template-parts/footer/footer-main'); ?>
        </main>
    </div>
</div>

<?php get_footer(); ?>