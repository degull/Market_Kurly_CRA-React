(function($,window){
   const obj = {
      init : function(){
         this.main();
      },
      main : function(){

         let sec6Top = '250';


            // 예외적인 오류 발생을 막기 위해
            // 예외적 오류 처리
            /*
            try{     
               //만약 섹션6 없어서 오류가 발생하면 catch에게 넘긴다.
               sec6Top = $('#section6').offset().top;

            }
            catch(e){
               //catch는 오류 발생 시 아래의 내용을 수행함.
               sec6Top = $('#main').offset().top;

            }
            */
   
            //반드시 스크로 이벤트가 발생되어야 실행됨.
            $(window).scroll(function(){
               if ( $(window).scrollTop() >= sec6Top) {
                  $('#goTop').addClass('on');
               }
               else {
                  $('#goTop').removeClass('on');
               }
            });

            $('#goTop').on({
               click(e){

                  e.preventDefault();
                  $('html,body').stop().animate({scrollTop:0},600);
               }
            });
         }
      }
   
   obj.init();

})(jQuery,window);