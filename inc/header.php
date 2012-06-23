<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if IE 9 ]>	  <html class="no-js ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title>Seal Beach Hair Salon | Hair Salon Seal Beach | Hair Salon In Seal Beach, CA | Soncy Hair Salon <?=ucfirst( $page )?></title>

	<meta name="viewport" content="width=960" />
	<meta name="keywords" content="seal beach hair salon, hair salon seal beach, hair salon in seal beach ca, seal beach beauty salon" >
	<meta name="description" content="Soncy Hair Salon Is Your Premiere Seal Beach Hair Salon Specializing In The Latest Hairstyles And Trends. Come In And Experience The Best Hair Salon In Seal Beach!" >

	<link rel="stylesheet" href="/lib/css/style.css" />
<? 	if( $_COOKIE['soncy-mobile'] != "1" ) :
?>	<link rel="stylesheet" href="/lib/css/handheld.css" />
<?	endif;
?>
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon-72x72.png" sizes="72x72" />
	<link rel="apple-touch-icon" href="/apple-touch-icon-114x114.png" sizes="114x114" />

	<script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.0.6/modernizr.min.js"></script>
</head>

<body class="page-<?=$page?>">
	<div id="alert">
		<p>Thank you for visiting Soncy! If you are here because of our <strong>LivingSocial promotion</strong>, please <strong>call 562-431-8000</strong> to book your appointment.</p>
	</div>
	<header>
		<div class="wrap cf">
			<a href="/" id="logo" class="ir">Soncy - Be You</a>

			<nav>
				<ul class="cf">
					<li><a href="/"><em>Be</em> Soncy <span>Home</span></a></li>
					<li>
						<a href="#" class="nc<? if($page=="team"||$page=="careers"||$page=="model"||$page=="faq"){?> active<?}?>"><em>Be</em> Informed <span>About Us</span></a>
						<ul class="list cf">
							<li><a href="/team/">Our Team</a></li>
							<li><a href="/careers/">Careers</a></li>
							<li><a href="/model/">Be A Model</a></li>
							<li><a href="/faq/">FAQs</a></li>
						</ul>
					</li>
					<li>
						<a href="#" class="nc<? if($page=="services"||$page=="products"||$page=="looks"){?> active<?}?>"><em>Be</em> Unique <span>What We Do</span></a>
						<ul class="list cf">
							<li><a href="/services/">Services</a></li>
							<li><a href="/products/">Products</a></li>
							<li><a href="/looks/">Looks</a></li>
						</ul>
					</li>
					<li>
						<a href="/contact/"<? if($page=="contact"){?> class="active"<?}?>><em>Be</em> Social <span>Contact</span></a>
					</li>
				</ul>
			</nav>
		</div>
	</header>

	<div id="main">
		<div class="wrap cf">
