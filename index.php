<?

if( !empty( $_REQUEST['page'] ) ) :
	$page = $_REQUEST['page'];

	if( strtolower( $page ) !== $page ) :
		header('Location: ../'.strtolower( $page ).'/');
	endif;
else :
	$page = "home";
endif;

if( $page == "full-site" ) :
	setcookie('soncy-mobile', 1, 0, '/', 'soncy.dev');
	setcookie('soncy-mobile', 1, 0, '/', 'besoncy.com');
	$page = "home";
	header('Location: ../');
endif;

if( is_file( 'pages/'.$page.'.php' ) ) :
	require( 'inc/header.php' );?>
<? 	include 'pages/'.$page.'.php'; ?>
<?	require( 'inc/footer.php' );
else:
	header('Location: ../404/');
endif;
?>
