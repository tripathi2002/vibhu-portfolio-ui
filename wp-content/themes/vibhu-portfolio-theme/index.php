<?php get_header(); ?>

<div class="container">
    <div class="row site-layout">

        <aside class="col3 sidebar-left">
            <?php get_template_part('template-parts/sidebar/profile'); ?>
        </aside>

        <main class="col8 main-content">
            main content
        </main>

        <aside class="col1 sidebar-right">
            <?php get_template_part('template-parts/header/navigation'); ?>
        </aside>

    </div>
</div>


<?php get_footer(); ?>