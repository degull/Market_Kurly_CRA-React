(function($){
   const obj = {
      init : function(){
         this.main();
      },
      main : function(){
         //쿠키는 만료기한(expires)을 정한다.
         //쿠키 중 만료기한이 없는 쿠키는 세션쿠기..
         //쿠키이름(Name) / 쿠키값(Value) / path(=/) / 만료기한(Expires)
         //쿠키 확인(가져오기)하기
         console.log(document.cookie);

         //쿠키가져오기 => 배열에 저장하기 : ':' 세미콜론 단위로 처리해서 배열에 저장하기
         let cookie = document.cookie.split(';');
         console.log(cookie);

         //가져왔는데 배열값 내용에 빈 공백이 포함되어있다. (문제점) => (해결)공백제거 trim() 내장함수
         //let cookie = document.cookie.split(';').trim();    //오류발생 split()함수와 trim()함수 충돌문제 발생
         //console.log(cookie); 

         //배열 map()함수 이용하여 공백 제거 그리고 쿠키 이름과 쿠키 값을 분류 저장.
         //객체에 저장
         //쿠키 이름이 
         //1234 = abc   
         let obj = [];
         cookie.map(function(item, i){
            obj[i] = {
               쿠키이름 : item.split('=')[0].trim(), 
               쿠키값 : item.split('=')[1]
            }
         });

         console.log(obj);
      }
   }
   obj.init();
})(jQuery);