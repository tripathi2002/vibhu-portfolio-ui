<?php get_header(); ?>
<section class="project-single">
    <div class="container">
        <div class="row">
            <div class="col">
                <h1><?php the_title(); ?></h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="project-hero">
                    <?php the_post_thumbnail('large'); ?>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col8 colmd-8">
                <div class="project-desc">
                    <?php the_content(); ?>
                </div>
            </div>

            <div class="col4 colmd-4">
                <div class="project-info">
                    <p><strong>Tech:</strong> Angular, Node.js, MongoDB</p>
                    <p><strong>Role:</strong> Full Stack Developer</p>
                    <a href="#" class="btn btn-primary">Live Demo</a>
                    <a href="#" class="btn btn-primary">GitHub</a>
                </div>

            </div>
        </div>
    </div>
</section>
<?php get_footer(); ?>