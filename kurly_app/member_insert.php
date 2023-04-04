<?

      include_once('./head.php');

      header('Access-Control-Allow-Origin: *');
      header('Access-Control-Allow-Headers: *');
   
      // 데이터베이스 접속 권한 
      $db_server      = 'localhost';
      $db_user_name   = 'skysh0929';
      $db_user_pw     = 'yoon1568!';
      $db_name        = 'skysh0929';
   
      // 데이터베이스 접속(connect)
      $conn = mysqli_connect($db_server, $db_user_name, $db_user_pw, $db_name);
      mysqli_set_charset($conn, 'utf8');

      // http://skysh0929.dothome.co.kr/kurly_CRA/member_insert.php

   // 보내온 폼 데이터 받기
   $user_id         = $_POST['user_id'];
   $user_pw         = $_POST['user_pw'];
   $user_name       = $_POST['user_name'];
   $user_mail       = $_POST['user_mail'];
   $user_phone      = $_POST['user_phone'];
   $user_addr       = $_POST['user_addr'];
   $user_gender     = $_POST['user_gender'];
   $user_bitrh      = $_POST['user_birth'];
   $user_add_input  = $_POST['user_add_input'];
   $user_service    = $_POST['user_service'];
   $user_gaib_date  = $_POST['user_gaib_date'];
  
   $sql = "INSERT INTO market_kurly_table(user_id,user_pw,user_name,user_mail,user_hp,user_addr,user_gender,user_birth,user_add_input,user_service,user_gaib_date) 
      VALUES
      ('$user_id','$user_pw', '$user_name', '$user_mail', '$user_phone', '$user_addr','$user_gender', '$user_bitrh','$user_add_input ', '$user_service', '$user_gaib_date' )";
      $result = mysqli_query($conn, $sql);


      if ($result){
         echo "데이터 삽입 성공!";
      }
      else {
         echo "데이터 삽입 실패!";
      }

?>