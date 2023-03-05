(function($,window){

   const obj = {
      init : function(){
         this.main();

      },
      main : function(){
           //3일동안 안열림 : 쿠키설정(일정 기간 설정)

            // 1. 탑 모달 닫기 & 쿠키 설정하기
            $('.top-modal-close').on({
               click:function(){
                  $('#topModal').fadeOut(0);
                  let newDate = new Date();  //날짜 객체 생성
                  newDate.setDate(newDate.getDate()+7);  //7일동안 안보기 설정
   
                  //document.cookie = `쿠키이름=쿠키값; 경로=/; 만료일=쿠키설정날짜기한.국제표준시설정;`;
                  document.cookie = `KURLYTOPMODAL=shkurlytopmodal; path=/; expires = ${newDate.toUTCString()};`;
                  
               }
            });
   
            // 2. 쿠키 가져오기
            // 쿠키 이름, 쿠기값이 일치한 쿠키를 찾는다
            // 만료기한이 남아있다면 모달을 숨긴다.
            // 만료기한이 지나면 모달을 보인다.
            function getCookie(){
               const cookie = document.cookie.split(';');   //쿠키를 세미콜론 단위로 나누어 처리
               let arr = [];
   
               //배열에 속성별 저장하기
               cookie.map((item, idx)=>{
                  arr[idx] = {
                     쿠키이름 : item.split('=')[0].trim(),
                     쿠키값 : item.split('=')[1]
                  }
               })
   
               // 쿠키 이름, 쿠기값이 일치한 쿠키를 찾는다
               arr.map((item)=>{
   
                  if(item.쿠키이름==='KURLYTOPMODAL' && item.쿠키값=='shkurlytopmodal'){
                     $('#topModal').fadeOut(0);
                     return;
                  }
                  
               })
            }
            getCookie();
   
            
         },

      }
   
   obj.init();

})(jQuery,window);