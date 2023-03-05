(($,window)=>{
   
   //객체생성(리터럴) => 프로토타입 객체
   const obj = {
      init() {
         this.categoryFn();
         this.newProduct();
      },

      categoryFn(){  //좌측카테고리 버튼 이벤트
         const categoryBtn = $('#section2 .left .category-btn');

         categoryBtn.on({
            click : function(e){
               e.preventDefault();  //새로고침 제거
               //$(this).next().slideUp(300);       //클릭 시 스크롤바 올라감(0.2초 동안)
               //$(this).next().slideDown(300);       //클릭 시 스크롤바 내려옴(0.2초 동안)
               $(this).next().slideToggle(300);       //클릭 시 스크롤바 업과 다운 동시에 진행됨

               //현재 버튼(a 링크 자식요소 중 svg 선택하여) 화살의 방향 회전 클래스 추가/삭제
               //$(this).children('svg').addClass('on');     //자식요소임
               //$(this).children('svg').removeClass('on');     //자식요소임
               //$(this).children('svg').toggleClass('on');     
               $(this).find('svg').toggleClass('on');     //find는 자식/자손요소까지 찾을 수 있음
            }
         });

      },

      newProduct(){  //우측 신상품 제품관리 스크립트 => JSON 데이터를 사용(외부 데이터)
         //data 폴더 안에 new_product.json 파일 객체를 저장
         //로딩 시 json 객체 파일을 가져와서 신상품 컨텐츠를 구성하도록 바인딩 시킨다.
         //반복문 사용하여 처리한다.
         //판매가는 할인율과 정가에 의해서 계산된다.
         //판매가와 정가는 3자리마다 ',' 형식 사용 => 정규표현식


         // 1. JSON 객체 가져오기 (비동기식 : AJAX API)
         $.ajax({
            url : './json_data/new_product.json',
            dataType : 'JSON', 
            success : function(result){
               //console.log('AJAX 성공', result.신상품);
               //console.log('AJAX 성공', result.베스트);

               //반복처리

               //정규 표현식
               // 1. 정규 표현식 표현 형식 문법
               // [] : 범위 
               // // : 표현식을 감싸는 기호
               //[^] : 부정
               //{5} : 5자
               //{5,} : 5자 이상
               //{5,12} : 5~12 범위
               // + :  1자 이상
               // * : 0자 이상
               // ? : 0자 또는 1자

               const regexpLowerCase1 = /[a-z]/;    // 영문 소문자
               const regexpLowerCase2 = /^[a-z]{5}/;    // 영문 소문자 5자 제한
               const regexpLowerCase3 = /^[a-z]{5,12}/;    // 영문 소문자 5~12자 제한
               const regexpLowerCase4 = /^[a-z]{5,}/;    // 영문 소문자 5이상
               const regexpLowerCase5 = /^[a-z]{5,10}$/g;    // 영문 소문자 5이상
               const regexpUpperCase  = /^[A-Z]/;    // 영문 대문자
               const regexpUpperLower = /^[A-Z]/i;    // 영문 대소문자 A-Z a-z
               const regexpNumber1    = /^[0-9]/;      // 숫자 0~9
               const regregexpNumber1expNumber2 = /^[\d]/;       // 숫자 0~9
               const regexpNumber3 = /^[^\d]/;       // 숫자 0~9가 아닌 것(부정)
               const regexpNumber4 = /^(\d)/;       // 숫자 0~9 그룹()()() 전화번호형식, ()() 우편번호형식, ()() 사업자번호형식
               const regexpNumber5 = /^[\d]$/g;         // 숫자 기본 0~9
               //const regexpNumber6 = /^(\)         // 숫자 기본 0~9


               // 유효성 검증 테스트 test() => true, false
               //console.log (정규표현식.test('문자열'));
               //console.log (RegExp.test('string'));
               //const str1 = '156'
               //const str2 = 'megacomputer'
               //console.log(`정규표현식1 영문소문자 : ${regexpNumber1} / test(${str1})` ,regexpNumber1.test(str1) );
               //console.log(`정규표현식1 영문소문자 : ${regexpNumber1} / test(${str2})` ,regexpNumber1.test(str2) );


               //함수 만들고
               //정규표현식 만들기
               //형식을 구현

               // 1. 판매가를 가져와서 확인
               function commaDeciaml(value){
                  //console.log(`판매가 호출한 숫자 : `, value);
                  let strValue = value.toString(); //숫자(number) => 문자열(String) : 타입 형변환
                  //console.log(`판매가 호출한 문자열 숫자 : `, strValue);
                  //return value;  //결과를 되돌려줌(콤마 형식을 만들어서 보내주기<세자리마다> 142000=> 142,000)


                  //숫자 세자리마다 콤마형식을 정규표현식으로 만들기
                  //보내온 숫자를 콤마형식으로 변환하기(치환) replace(정규표현식, (그룹1),(그룹2))

                  //5 898 => (5는 시작 숫자가 1자 이상) , (898은 뒤 숫자가 3자 이상)
                  //const regExp = /(시작숫자가1자이상\d+)(뒷3자리 숫자\d{3})/g;
                  const regExp = /(^\d+)(\d{3})/g;
                  //숫자문자열.replace(regExp, '$1,$2');
                  while (regExp.test(strValue)){   //숫자가 네자리 이상만 적용됨
                     strValue = strValue.replace(regExp, '$1,$2');
                     console.log(strValue);
                  }
                  return strValue;
               }


               let txt = '';
               result.신상품.map((item,idx)=>{
                 /*  return console.log(idx, item.제품코드, item.제품이미지, item.제품명, item.할인율, item.정가, item.판매처); */
               txt += `<li class="product-list">`
               txt += `  <div class="gap">`
               txt += `     <div class="img-box">`
               txt += `        <a href="#">`
               txt += `           <img src="./img/main1/${item.제품이미지}" alt="">`
               txt += `           <span><img src="./img/main1/cart_fill.svg" alt=""></span>`
               txt += `        </a>`
               txt += `     </div>`
               txt += `     <div class="caption-box">`                              
               txt += `        <h2>${item.제품명}</h2>`
               txt += `        <h3>
                                    ${item.할인율 > 0 ? `<strong>${Math.round(item.할인율*100)}%</strong>` : ``}
                                    <em>${commaDeciaml(Math.round(item.정가*(1-item.할인율)))}원</em>
                                    </h3>`;
               txt += `        ${item.할인율 > 0 ? `<h4><s>${commaDeciaml(item.정가)}원</s></h4>` : ``}`
               txt += `     </div>`
               txt += `  </div>`
               txt += `</li>`
               }); 

               //출력바인딩
               $('.new-product-gallery').append(txt);


            },
            error : function(error){
               console.log('AJAX 실패', error);
            }
         });

      }

   }

   obj.init();

})(jQuery, window);