<?php
/* Template Name: Blog */
?>
<?php get_header(); ?>


<?php echo 'working on blog...' ?>
<?php get_footer(); ?>
<?php exit(); ?>

<div class="container">
    <h1>Blog</h1>
    <?php if (have_posts()): ?>
        <?php while (have_posts()):
            the_post(); ?>

            <div class="blog-item">
                <h3><?php the_title(); ?></h3>
                <p><?php the_excerpt(); ?></p>
            </div>

        <?php endwhile; ?>
    <?php else: ?>
        <p>No posts found</p>
    <?php endif; ?>

</div>

<?php get_footer(); ?>