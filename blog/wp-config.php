<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'aglafnzw_blog');

/** MySQL database username */
define('DB_USER', 'aglafnzw_lem');

/** MySQL database password */
define('DB_PASSWORD', 'rl5009014');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '[X$8qet1+W?OFA[P!/g3Xv-`3?<!q%alcOT-.ovil0!=kLqVGjBMmVA /V>&OGnd');
define('SECURE_AUTH_KEY',  ',KjwsXLgXGC[@3^L0_a;{&4 W#xl t?c}-l{f4jFeM$tH1}#/4ps-nb,+9,@}fxb');
define('LOGGED_IN_KEY',    '/K!eS/&I!($o.fRhPR9 ()(u%D$nUv7Psg;a?zz#x-|,p8a%{B?wK9Pv-||9y=B,');
define('NONCE_KEY',        'H~;H6xrJDwDr@s|4*5]Or,T#xWC[90@Pk j@GAb2wC<,A!lbN3[;9BP:.gYk]6%N');
define('AUTH_SALT',        'v,^L_G<#8T<|Q+%68rtuWEvCQF+Hsq%Izq@SE&#*;KFy5EKCx,Tu1uVX~)^~M!c)');
define('SECURE_AUTH_SALT', 'E,l3:sc(H@s$UsVrl}wI+}-4IcC//!P;AVBSV|2AUWXU7XbYvQ+Gs_1O]2S8#9g+');
define('LOGGED_IN_SALT',   '+oG=M8(h-Nks@Oq)lFD~qzD5/N@xOh}7SvlwKP9Q|d8-Rn+HyuT@}H we|+ YN5H');
define('NONCE_SALT',       ' JEyUU-uNaQgjE{f7.+%$Z|I$OQRz*?<0KW7YbhfUt`%Q>>guXV{8:PBSPxnS[Qx');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
