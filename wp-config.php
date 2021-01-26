<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u963036993_opticoreGT' );

/** MySQL database username */
define( 'DB_USER', 'u963036993_opticoreGT' );

/** MySQL database password */
define( 'DB_PASSWORD', 'adminDev2020' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9OGhR91?|vq TyM~/3.Us~F/iN+@MR=?1z9Q#z]d7L/:z;3taXRwCcDw`HGq 0&4' );
define( 'SECURE_AUTH_KEY',  '}sYj$qk1AcvHlfQtZt37$?x%+>3peJwiKVJ8}W2vfiodt4nD-T/G`x {vc`&QAdo' );
define( 'LOGGED_IN_KEY',    '<cBZ 5zFAzF;zLMBDzoTGs(&TEU~*rbT $FLOCp~I4%BpluQ(OppeuHlt!#hl19B' );
define( 'NONCE_KEY',        'mab@3d[WO*WssVP^6OZ^|mr#;Z@rhA%~f#am}#bk(7RV0lzm5;;f*;!75@eE[&fV' );
define( 'AUTH_SALT',        'SUJr3vYTir4)*;<d0|,|))8IazG(.JaJdoPc9*0FusBJmvLRS2+X3zyt /0QLIUD' );
define( 'SECURE_AUTH_SALT', 'M<ws]sM?c0mn<U^&}xJS!*GU}Z 6|)Q2nviJK6R~ )PR*/v1yzhr7=3z$9#/4,`(' );
define( 'LOGGED_IN_SALT',   '!Rqr)+pch.,hE1WMt8rLXSC|OxA2aQ*ZBm)uI=j0,g&_.x^u4UIZ;6422:#v46)*' );
define( 'NONCE_SALT',       'yZaV.}eR!BH.an2tAD*Gv{.8eI~<i]7$*g{=Udf?I1n)9B+xfgp];|bg<H*FOz-/' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */

define('ALLOW_UNFILTERED_UPLOADS', true);
define( 'WP_DEBUG', false );
define('WP_ALLOW_MULTISITE', true);
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', false);
define('DOMAIN_CURRENT_SITE', 'opticore.cosmos.studio');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
