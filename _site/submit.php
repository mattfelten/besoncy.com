<?php
// Enter your email address below
$emailAddress = 'matt@arkitect.org';
$emailAddress = 'soncy@besoncy.com';

// Using session to prevent flooding:

session_name('quickFeedback');
session_start();

// If the last form submit was less than 10 seconds ago,
// or the user has already sent 10 messages in the last hour
/*
if(	$_SESSION['lastSubmit'] && ( time() - $_SESSION['lastSubmit'] < 10 || $_SESSION['submitsLastHour'][date('d-m-Y-H')] > 10 )) :
	die('Please wait for a few minutes before sending again.');
endif;
*/
$_SESSION['lastSubmit'] = time();
$_SESSION['submitsLastHour'][date('d-m-Y-H')]++;

require "assets/php/class.phpmailer.php";

if( ini_get('magic_quotes_gpc') ) :
    // If magic quotes are enabled, strip them
    $_POST['message'] = stripslashes($_POST['message']);
endif;

if( mb_strlen( $_POST['message'],'utf-8') < 5 ):
    die('Your feedback body is too short.');
endif;

if( !checkEmail( $_POST['email'] ) ) :
	die('Your email address is not valid.');
endif;



$msg = nl2br( strip_tags( $_POST['message'] ) );
$name = strip_tags( $_POST['name'] );
$email = strip_tags( $_POST['email'] );

$msg = "From: ".$name." - ".$email."<br /><br />".$msg;

// Using the PHPMailer class

$mail = new PHPMailer();
$mail->IsMail();
// Adding the receiving email address
$mail->AddAddress($emailAddress);

$mail->Subject = 'New Contact Form Submission';
$mail->MsgHTML($msg);

$mail->AddReplyTo( $email, $name );
$mail->SetFrom( $email, $name );

$mail->Send();

echo '<h3>Thank you for filling out our <span>contact form!</span></h3>';


function checkEmail($email){
	//check email format
	if (filter_var($email, FILTER_VALIDATE_EMAIL) == $email){
		//check if the domain has MX entries
		$aux = explode('@',$email);
		return checkdnsrr($aux[1],'MX');
	}
	return false;
}

?>
