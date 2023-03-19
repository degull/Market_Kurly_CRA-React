<?

   // 데이터베이스 접속 권한 
   $db_server      = 'localhost';
   $db_user_name   = 'skysh0929';
   $db_user_pw     = 'yoon1568!';
   $db_name        = 'skysh0929';

   // 데이터베이스 접속(connect)
   $conn = mysqli_connect($db_server, $db_user_name, $db_user_pw, $db_name);
   mysqli_set_charset($conn, 'utf8');

   // 테이블 만들기
//   $sql = "CREATE TABLE 테이블이름(
//      속성이름(필드이름) 자료형 빈값허용여부,
//      속성이름(필드이름) 자료형 빈값허용여부,
//      속성이름(필드이름) 자료형 빈값허용여부,
//      속성이름(필드이름) 자료형 빈값허용여부
//   )";



   $sql = "CREATE TABLE market_kurly_table (
      idx int NOT NULL  AUTO_INCREMENT PRIMARY KEY,
      user_id varchar(16) COLLATE utf8mb4_general_ci NOT NULL COMMENT '아이디',
      user_pw varchar(16) COLLATE utf8mb4_general_ci NOT NULL COMMENT '비밀번호',
      user_name varchar(100) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이름',
      user_mail varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이메일',
      user_hp varchar(13) COLLATE utf8mb4_general_ci NOT NULL COMMENT '휴대폰',
      user_addr varchar(255) COLLATE utf8mb4_general_ci NOT NULL COMMENT '주소',
      user_gender varchar(4) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '성별',
      user_birth varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '생년월일',
      user_add_input varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '추가입력사항',
      user_service varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이용약관동의',
      user_gaib_date varchar(10) COLLATE utf8mb4_general_ci NOT NULL COMMENT '가입일자'
    )ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='2023_마켓컬리 회원가입 테이블'";
    
   $result = mysqli_query($conn, $sql);

   if(!$result) {
      echo('테이블 생성 실패');
   }
   else {
      echo('테이블 생성 성공');
   }

?>