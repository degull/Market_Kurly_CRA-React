<?

   // skysh0929.dothome.co.kr/kurly_CRA/insert.php
   // skysh0929.dothome.co.kr/myadmin/
   // skysh0929.dothome.co.kr/kurly_CRA/create_table.php

/*
   // 데이터베이스 접속 권한 
   $db_server      = 'localhost';
   $db_user_name   = 'skysh0929';
   $db_user_pw     = 'yoon1568!';
   $db_name        = 'skysh0929';

   // 데이터베이스 접속(connect)
   $conn = mysqli_connect($db_server, $db_user_name, $db_user_pw, $db_name);
   mysqli_set_charset($conn, 'utf8');
*/
   include_once('./head.php');

   // 접속 확인
   //if(!$conn){
   //   die('데이터베이스 접속 실패');
   //}
   //else {
   //   echo('데이터베이스 접속 성공');
   //}

   // 더미테이터 데이이터베이스 테이블 삽입하기 : 5명
   // SQL 명령문 삽입 INSERT INTO 테이블이름(필드1, 필드2, ...) VALUES(필드값1, 필드값2, ...)
   $sql = "INSERT INTO market_kurly_table(user_id,user_pw,user_name,user_mail,user_hp,user_addr,user_gender,user_birth,user_add_input,user_service,user_gaib_date) 
      VALUES
      ('skysh09291','yoon1568!', '윤승현', 'skytmdgus591@naver.com', '010-5604-1568', '서울시 서초구','여성', '2000-09-29','추가입력사항' '마켓컬리 세일 이벤트', '이용약관 동의(필수)' '본인은 14세 이상입니다(필수)', '2023-03-19' ),
      ('skysh09292','yoon1568!', '김승현', 'skytmdgus592@naver.com', '010-5604-1568', '서울시 서초구','여성', '2000-09-29','추가입력사항' '마켓컬리 세일 이벤트', '이용약관 동의(필수)' '본인은 14세 이상입니다(필수)', '2023-03-19' ),
      ('skysh09293','yoon1568!', '최승현', 'skytmdgus593@naver.com', '010-5604-1568', '서울시 서초구','여성', '2000-09-29','추가입력사항' '마켓컬리 세일 이벤트', '이용약관 동의(필수)' '본인은 14세 이상입니다(필수)', '2023-03-19' ),
      ('skysh09294','yoon1568!', '박승현', 'skytmdgus594@naver.com', '010-5604-1568', '서울시 서초구','여성', '2000-09-29','추가입력사항' '마켓컬리 세일 이벤트', '이용약관 동의(필수)' '본인은 14세 이상입니다(필수)', '2023-03-19' ),
      ('skysh09295','yoon1568!', '이승현', 'skytmdgus595@naver.com', '010-5604-1568', '서울시 서초구','여성', '2000-09-29','추가입력사항' '마켓컬리 세일 이벤트', '이용약관 동의(필수)' '본인은 14세 이상입니다(필수)', '2023-03-19' )";
      $result = mysqli_query($conn, $sql);


      if ($result){
         echo ("데이터 삽입 성공");
      }
      else {
         echo ("데이터 삽입 실패");
      }

?>