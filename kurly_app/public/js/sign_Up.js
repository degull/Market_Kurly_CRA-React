(($,window,ducument)=>{

   const SignUp = {

      /* 최상위 변수 : 데이터를 받아서 보관함 */
      member:{
         아이디:'',           //string
         아이디중복확인:false,
         
         비밀번호:'',         //string()
         비밀번호확인:false, //boolean
         
         이름:'',             //string
         
         이메일:'',           //string
         이메일중복확인:false,
         
         휴대폰:'',           //string
         휴대폰인증번호:0,    //number
         분:2,
         초:59,
         setId:0,

         주소:'',             //string
         성별:'' ,            //string 
         생년월일:'',         //string
         추가입력사항:'',     //string
         이용약관동의: []     //Array<string>
      },

      init(){
         this.main();
      },

      main(){
         const that = this;
         // 입력폼 데이터 유효성 검사와 데이터 전송 => 정규표현식 사용
         // 1. 아이디 입력상자
         // Event : onchange onkeyup 
         // 키보드로 입력하면 즉시 입력값을 점검한다.
         // 1) 특수문자입력과 동시삭제
         // 2) 한글입력사용안됨
         // 3) 6자 ~ 16자 이하 영문 혹은 영문과 숫자를 조합
         // 4) 공백사용안됨
         $('#userId').on({
            keyup(){    //입력칸에 입력이 되면
               const regExp1 = /[`~!@#$%^&*()_\-+=|\\\[\]\\\{}"';:\/?\.\,>,<]/g;   //특수문자
               const regExp2 = /[가-하ㄱ-ㅎㅏ-ㅣ]/g;    //한글
               const regExp3 = /[A-Za-z]+[0-9]/g;  //영문과 숫자의 조합 (영문은 반드시 존재해야하지만 숫자는 존재해도되고 안해도됨(*표시 사용))
               const regExp4 = /.{6,16}/g;       //모든 글자는 .으로 대체 && 6~16자 이하   
               const regExp5 = /(.)\1\1\1/g;       //동일한 연속된 문자 3글자 이상은 불가   /* 연속글자를 찾는 방법 */
               const regExp6 = /\s/g;     //공백허용안함


               // 1. 정규표현식 특수문자가 아니면 삭제(공백으로 치환)
               // 문자열.replace(정규식,'');
               $(this).val( $(this).val().replace(regExp1, ''));  //특수문자가 입력되면 특수문자 입력되지 않고 공백으로 치환됨

               // 2. 한글입력사용안됨
               //모두 오류라면
               //한글이라면 또는 영문과 숫자 조합이 아니라면 오류 && 6~16가 아니라면 오류 && 연속된 글자가 3자 이상이면 오류
               if( regExp2.test($(this).val()) === true || regExp3.test($(this).val()) === false || regExp4.test($(this).val()) === false || regExp5.test($(this).val()) === true || regExp6.test($(this).val()) === true ){   
                  $(this).parent().next().addClass('on').text("6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합, 한글허용안함, 공백허용안함, 동일한 문자 연속 3자 이상 허용 안함");   //에러 사항이 화면에 나오도록
               }
               else {                                       //오류가 아니라면
                  $(this).parent().next().removeClass('on');
                  that.member.아이디 = $(this).val();

               }

            }
         });


         // 비밀번호 입력사항
         // Event : keyup
         // 1) 영문/숫자/특수문자만 허용하며, 2개 이상 조합(영문자, 숫자특수, 영특수문자)
         // 2) 최소 10자 이상 입력
         // 3) 한글허용안됨
         // 4) 공백허용안됨
         // 5) 동일한 연속된 글자 3자
      
         $('#userPass').on({
             keyup(){
                 
                 // 1개씩 확인하고 모두 조합
                 // const regExp = /([A-Za-z]+[0-9]+)+/g;  // 영문 또는 영문숫자
                 // const regExp = /([A-Za-z]+[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]+)+/g;  // 영문 또는 영문숫자
                 // const regExp = /([0-9]+[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]+)+/g;  // 영문 또는 영문숫자
                 const regExp1 = /([0-9]+[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]+)+|([A-Za-z]+[0-9]+)+|([A-Za-z]+[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]+)+/g;  // 영문 또는 영문숫자
                 const regExp2 = /.{10,}/g;           // 10자이상~ 
                 const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g; // 한글
                 const regExp4 = /\s/g;               // 공백 
                 const regExp5 = /(.)\1\1/g;          // 동일한 연속된 글자 3자 
                 
                 if( regExp1.test($(this).val())===false || regExp2.test($(this).val())===false || regExp3.test($(this).val())===true || regExp4.test($(this).val())===true || regExp5.test($(this).val())===true ){ // 
                     $(this).parent().next().addClass('on').text('영문/숫자/특수문자만 허용하며, 2개 이상 조합');
                 }
                 else {
                     $(this).parent().next().removeClass('on');
                     that.member.비밀번호 = $(this).val();

                 }
             }
         });


         // 3. 비밀번호 확인 입력상자
         $('#userPass2').on({
            keyup(){
                
                if( $('#userPass').val() !== $('#userPass2').val() ){      //비밀번호와 비밀번호 확인 값이 다르면 
                    $(this).parent().next().addClass('on').text('동일한 비밀번호를 입력');
                }
                else {
                    $(this).parent().next().removeClass('on');
                    that.member.비밀번호확인 = true;

                }
            }
         });


         // 4. 이름 입력상자
         // 1) 한글가능
         // 2) 영문가능
         // 3) 숫자가능
         // 4) 공백가능
         // 5) 특수문자 입력즉시 삭제



         $('#userName').on({
            keyup(){
            
               const regExp1 = /[`~!@#$%^&*()_\-+=|\\\[\]\\\{}"';:\/?\.\,>,<]/g;   //특수문자
               const regExp2 = /[A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s]{1,20}/g;  // 영문숫자한글공백
            
            
               // 문자열.replace(정규식,'');
            
               $(this).val( $(this).val().replace(regExp1, ''));  //특수문자가 입력되면 특수문자 입력되지 않고 공백으로 치환됨
            

               if( regExp2.test($(this).val()) === false ){ // 
                   $(this).parent().next().addClass('on').text('이름을 입력해주세요');
               }
               else {
                   $(this).parent().next().removeClass('on');
                   that.member.이름 = $(this).val();

               }
            }
         });


         // 5. 이메일 입력상자
         // 1) @ 앞부분 : .(dot)1회 사용
         // 2) @ 앞부분 : @ () \ [] "" ; : <> , 사용안됨
         // 3) @ 뒷부분 : ~ - ` _ . 사용
         // 4) @ 뒷부분 중간 미국 제외 : 영문 2,3
         // 5) @ 뒷부분 미국 맨뒤 : 영문 3
         // 6) @ 뒷부분 미국 제외 맨뒤 : 영문 2
         // 7) 공백 사용불가
         // 8) 한글사용안됨

         //skytmdgus591@naver.com
         //skytmdgus591@naver.co.kr
         //시작문자  @     .영문{2,3}종결문자/g


           
         $('#userEmail').on({
            keyup(){

               const regExp1 = /^[A-Za-z0-9`~!#$%^&*_\-+=|{}'\/?]+[\.]?[A-Za-z0-9`~!#$%^&*_\-+=|{}'\/?]*@[A-Za-z0-9~\-_\.]+\.[A-Za-z]{2,3}$/g;  // 이메일
               const regExp2 = /\s/g;  //공백

               if($(this).val()!=='') {   //이메일이 공백이 아니라면
                  if (regExp1.test($(this).val()) === false || regExp2.test($(this).val()) === true) {
                     $(this).parent().next().addClass('on').text('이메일 형식으로 입력해주세요');
                  }
                  else {
                     $(this).parent().next().removeClass('on');
                     that.member.이메일 = $(this).val();

                  }

               }
               else {      //이메일이 공백이면
                  $(this).parent().next().addClass('on').text('이메일을 입력해주세요');
               }

            }

         });



         // 6. 휴대폰 입력 상자
         $('#userPhone').on({
            keyup(){

               if( $(this).val().length >= 1 ){
                  //$('.hp-num-btn').addClass('on').attr('disabled', false); //사용가능 속성변경
                  $('.hp-num-btn').addClass('on').prop('disabled', false); //사용가능 속성변경
                  //$('.hp-num-btn').addClass('on').prop('disabled', true); //사용불가능 속성변경
               }
               else {
                  $('.hp-num-btn').removeClass('on');
                  that.member.휴대폰 = $(this).val();

               }
            }
         });



         // 7. 타이머 카운트다운 알고리즘 구현
         // 3분 카운트 2분 59초
         function timerCountDown(){
            that.member.setId = setInterval(function(){
               that.member.초--;
               if (that.member.초 < 0){ 
                  that.member.초 = 59;
                  that.member.분--;
                  if ( that.member.분 < 0) {
                     clearInterval (that.member.setId );

                     $('#formEventModal').fadeIn(300);
                     $('#formEventModal .msg').html('유효시간이 만료되었습니다. 다시 시도해 주세요' );
                     $('.hp2').removeClass('on');
                     that.member.초 = 59;
                     that.member.분 = 2;
                  }

               }

               // 분/초가 두자리로 표시되도록 
               // 10미만이면 1자리. 따라서 문자열 0을 추가한다.
               $('.count-minutes').text( that.member.분 < 10 ? `0${that.member.분}` : that.member.분 );
               $('.count-seconds').text( that.member.초 < 10 ? `0${that.member.초}` : that.member.초 ) ;
            },1000);
         }




         // 8. 휴대폰 인증번호 받기 버튼 클릭 이벤트 => 인증번호 전송 (6자리의 랜덤번호 전송)
         // 0) 휴대폰번호 유효성검사 [정규표현식] 통과하면 아래 수행
         // 1) 인증번호를 입력할 입력상자가 우측버튼을 보이도록 한다
         // 2) 인증번호 받기 버튼을 누르면 => 인증번호 랜덤으로 전송되도록 
         $('.hp-num-btn').on({
            click(e){
               e.preventDefault();

               //010 - 5604 - 1586
               const regExp = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/g;

               //console.log( regExp.text($('#userHpNumBox').val()));

               
               if ( regExp.test($('#userPhone').val()) === false) {
                  $('#formEventModal').fadeIn(300);
                  $('#formEventModal .msg').html('잘못된 휴대폰번호 입니다.' );
               }
                
               else {
                  $('.hp2').addClass('on');         
                  const randomNum = Math.floor(Math.random() * 900000+100000);
                  //console.log( Math.ceil(randomNum*900000+100000) );     //소수점 자리내림
                  //console.log( Math.round(randomNum*900000+100000) );     //소수점 반올림
                  //console.log( Math.floor(randomNum*900000+100000) );     //소수점 반내림
   
                  $('#formEventModal').fadeIn(300);
                  $('#formEventModal .msg').html(`인증번호가 발송되었습니다. ${randomNum}` );
                  that.member.휴대폰인증번호 = randomNum;
                  timerCountDown(); //타이머 실행

               }

            }
         });

         // 9. 폼 이벤트 모달 닫기버튼 클릭 이벤트
         $('.msg-modal-close-btn').on({
            click(e) {
               e.preventDefault();
               $('#formEventModal').fadeOut(300);
            }
         });


         // 10. 인증번호 입력창 on
         // 1) 1글자 이상 입력되면 버튼 사용 가능하도록
         $('#userHpNumBox').on ({
            keyup(){
               if ( $(this).val().length >= 1 ) {
                  $('.hp-ok-btn').addClass('on').prop('disabled' ,false);
               }
               else {
                  $('.hp-ok-btn').removeClass('on').prop('disabled', true);
               }
            }
         });


         // 11. 인증번호 확인 버튼 클릭 이벤트
         // 1) 전송된 인증번호와 입력된 인증번호 비교
         $('.hp-ok-btn').on({
            click(e){
               e.preventDefault();
               //console.log( Number($('#userHpNumBox').val()) );
               //console.log(that.member.휴대폰인증번호);

               if (Number($('#userHpNumBox').val()) === that.member.휴대폰인증번호) {
                  $('#formEventModal').fadeIn(300);
                  $('#formEventModal .msg').html('인증에 성공하였습니다.' );

                  $('.hp-num-btn2').addClass('on');   //다른 번호 인증 버튼 보이기
                  $('.hp-num-btn').addClass('off');   //인증번호 받기 버튼 숨기기
               }
               else {
                  $('#formEventModal').fadeIn(300);
                  $('#formEventModal .msg').html('잘못된 인증코드 입니다.' );
               }
            }
         });

         // 12. 다른번호 인증
         $('.hp-num-btn2').on({
            click(e) {
               e.preventDefault();
               $('.hp-num-btn').removeClass('off');   //인증번호 받기 버튼 숨기기
               $('.hp-num-btn2').removeClass('on');   //다른 번호 인증 버튼 보이기
               $('.hp2').removeClass('on');           //인증번호 입력상자, 버튼 모두 숨기기
               clearInterval(that.member.setId);
               that.member.초 = 59;
               that.member.분 = 2;
            }
         });



         // 13. 주소 검색 버튼 클릭 이벤트 : 카카오 주소 검색 API
         $('.address-search-btn').on({
            click(e) {
               e.preventDefault();
               window.open('./popup.html','_address_search_popup','width:530px, height:569px, top=0, left=0');
            }
         });

         



      },


      
   }
   
   SignUp.init();

})(jQuery,window,document);