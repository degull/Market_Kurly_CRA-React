(function($,window){
   const obj = {
      init:function(){
         this.main();
      },
      main : function(){
         
            //인트로 모달 닫기
            $('.close-btn').on({
               click: function(e){
                  e.preventDefault();
                  $('#introModal').fadeOut(600);
                  
               }
            });
   
            //인트로 모달 닫기
            //다시는 안보기 : local storage memory
            $('.close-open-none-btn').on({   
               click: function(e){
                  e.preventDefault();
                  $('#introModal').fadeOut(600);
                  localStorage.setItem('KURLYTOPMODAL','shkurlytopmodal');
                  
               }
            });
   
   
   
            //웹 페이지 열리면 또는 새로고치면
            //local storage key와 값을 가져오기
            //그리고 가져온 키와 비교 있다면 모달 숨김
            //만약에 키가 없다면 열림
            //키가 없으면 값이 없다 그래서 null(null 이 아니라면)
            if( localStorage.getItem('KURLYTOPMODAL') != null){
               $('#introModal').fadeOut(500);
            }
            else{
               $('#introModal').fadeIn(500);
            }
          
   
         }
      }
      obj.init();
      
})(jQuery,window);