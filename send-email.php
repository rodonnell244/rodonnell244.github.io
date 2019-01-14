<?php

if (isset($_POST['email'])) {
  
      $from_name = $_POST['name'];
      $from_email = $_POST['email'];
      $text = $_POST['message'];
    
      $to_email = "rodonnell244@outlook.com"; //my mail id
      $to_name = "Rachel";
      $subject = "From Web";
     
      $headers = 'MIME-Version: 1.0' . "\r\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
      $headers .= 'To: '.$to_name.'<'.$to_email.'>' . "\r\n";
      $headers .= 'From: '.$from_name.' <'.$from_email.'>' . "\r\n";
      $headers .=  'X-Mailer: PHP/' . phpversion();
     
      $message = "<html xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"en\" xml:lang=\"en\">\r\n
                  <head>\r\n
                    <title>Hello Test</title>\r\n
                  </head>\r\n
                  <body>\r\n
                    <p> You have received an inquiry from your website.  Please review the contact information below.</p>\r\n
                     <p>Name: " .$from_name."</p>\r\n
                      <p>Email: " .$from_email."</p>\r\n
                    <p>Message: " .$text."</p>\r\n
                  </body>\r\n
                  </html>";
      $message = wordwrap($message, 70, "\r\n");
  
   /*  $to_email      = 'rodonnell@qubeglobal.com';
      $subject = 'the subject';
      $message = 'hello';
      $headers = 'From: rodonnell244@outlook.com' . "\r\n" .
          'Reply-To: rodonnell@qubeglobal.com' . "\r\n" .
          'X-Mailer: PHP/' . phpversion();
     */
  
  //echo $headers;
 // echo $message;
  
     if (mail($to_email, $subject, $message, $headers)) {
        echo"<script type=\"text/javascript\">"; 
        echo " 	parent.$(\"#error\").html(\"Thank You For Contacting us\");";
        echo "</script>";
     } else {
        echo"<script type=\"text/javascript\">";
        echo " parent.$(\"#error\").html(\"Error sending mail, please try again later\"); ";
        echo "</script>";
    }  
  

      
}
//echo print_r(error_get_last());
 ?>