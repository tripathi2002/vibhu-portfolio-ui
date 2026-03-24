<?php get_header(); ?>

<?php echo 'working on single post...' ?>
<?php get_footer(); ?>
<?php exit(); ?>

<div class="container">

    <?php if (have_posts()):
        while (have_posts()):
            the_post(); ?>

            <article class="blog-single">

                <h1><?php the_title(); ?></h1>

                <div class="blog-meta">
                    <span><?php echo get_the_date(); ?></span>
                </div>

                <?php if (has_post_thumbnail()): ?>
                    <div class="blog-image">
                        <?php the_post_thumbnail('large'); ?>
                    </div>
                <?php endif; ?>

                <div class="blog-content">
                    <?php the_content(); ?>
                </div>

                <div class="blog-tags">
                    <?php the_tags('', ' ', ''); ?>
                </div>

                <div class="blog-nav">
                    <div><?php previous_post_link(); ?></div>
                    <div><?php next_post_link(); ?></div>
                </div>

            </article>

        <?php endwhile; endif; ?>

</div>

<?php get_footer(); ?>