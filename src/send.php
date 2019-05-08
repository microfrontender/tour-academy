<?php

    $to = 'kalinovsky.job@gmail.com'; 
    $subject ='Сообщение с сайта Академия персональных турагентов '; 
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Заголовок: '.$_POST['title'].'</p>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Телефон: '.$_POST['tel'].'</p>
                    <p>Почта: '.$_POST['mail'].'</p>
                </body>
            </html>'; 
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
    $headers .= "From: Академия персональных турагентов <kalinovsky.job@example.com>\r\n"; 
    mail($to, $subject, $message, $headers); 

?>