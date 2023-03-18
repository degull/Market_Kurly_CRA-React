<?

   // skysh0929.dothome.co.kr/kurly_CRA/insert.php

   // 데이터베이스 접속 권한 
   $db_server      = 'localhost';
   $db_user_name   = 'skysh0929';
   $db_user_pw     = 'yoon1568!';
   $db_name        = 'skysh0929';

   // 데이터베이스 접속(connect)
   $conn = mysqli_connect($db_server, $db_user_name, $db_user_pw, $db_name);
   mysqli_set_charset($conn, 'utf8');

   // 접속 확인
   if(!$conn){
      die('데이터베이스 접속 실패');
   }
   else {
      echo('데이터베이스 접속 성공');
   }
?>