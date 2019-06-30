<?php
/**
 * Plugin Name: Image Switcher Block
 * Description: Takes two images and switches between them on hover
 * Version: 1.0.0
 * Author: A Person of Note
 *
 *  @package personofnote
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

function image_switcher_editor_assets() {
    wp_enqueue_script(
        // the name - also generally {namespace/blockname}
        'personofnote/image-switcher',
        // where the javscript is located
        plugins_url( 'build/index.build.js', __FILE__ ),
        // and dependencies WordPress needs to serve up for us
        // you must have these two for the most basic block
        array( 'wp-blocks', 'wp-element', 'wp-editor' )
    );
    wp_enqueue_style(
		'personofnote/image-switcher',
        plugins_url( 'src/editor.css', __FILE__ ),
        array( 'wp-edit-blocks' )
	);
};

// and then, we actually have the function run when the editor loads...
add_action( 'enqueue_block_editor_assets', 'image_switcher_editor_assets' );

function image_switcher_assets() {
    wp_enqueue_style(
		'personofnote/image-switcher',
        plugins_url( 'src/view.css', __FILE__ ),
        array( 'wp-edit-blocks' )
    );
    wp_enqueue_script(
        'personofnote/image-switcher',
        plugins_url( 'src/script.js', __FILE__ ),
    );
}
add_action( 'enqueue_block_assets', 'image_switcher_assets' );


?>