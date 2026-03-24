<?php
/* Template Name: Projects */
?>
<?php get_header(); ?>
<div class="projects">

    <div class="container">
        <h1>My Projects</h1>
        <div class="row">
            <?php
            $query = new WP_Query([
                'post_type' => 'project',
                'posts_per_page' => -1
            ]);

            if ($query->have_posts()):
                while ($query->have_posts()):
                    $query->the_post();
                    ?>
                    <div class="col4">
                        <div class="card">
                            <a href="<?php the_permalink(); ?>">

                                    <?php if (has_post_thumbnail()): ?>
                                    <div class="project-image">
                                            <?php the_post_thumbnail('large'); ?>
                                    </div>
                                    <?php endif; ?>

                                <h2>
                                    <?php the_title(); ?>
                                </h2>
                            </a>
                        </div>
                    </div>

                <?php endwhile; else: ?>

                <p>No projects found</p>

            <?php endif; ?>

            <?php wp_reset_postdata(); ?>

        </div>

    </div>
</div>

<?php get_footer(); ?>