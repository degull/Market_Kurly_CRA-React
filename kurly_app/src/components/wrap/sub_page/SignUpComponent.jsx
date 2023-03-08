import React from 'react';

export default function SignUpComponent( props ){

   console.log( props );


   // 상태관리(변수, 세터변수)
   const [state, setState] = React.useState( props );

   console.log (state);

   // [1] 아이디 입력상자
   const onChangeUserId=(e)=>{
      e.preventDefault();
      const regExp1 = /[`~!@#$%^&*()_\-+=|\\\[\]\\\{}"';:\/?\.\,>,<]/g;   //특수문자
      const regExp2 = /[가-하ㄱ-ㅎㅏ-ㅣ]/g;    //한글
      const regExp3 = /[A-Za-z]+[0-9]/g;  //영문과 숫자의 조합 (영문은 반드시 존재해야하지만 숫자는 존재해도되고 안해도됨(*표시 사용))
      const regExp4 = /.{6,16}/g;       //모든 글자는 .으로 대체 && 6~16자 이하   
      const regExp5 = /(.)\1\1\1/g;       //동일한 연속된 문자 3글자 이상은 불가   /* 연속글자를 찾는 방법 */
      const regExp6 = /\s/g;     //공백허용안함

      //let value = e.target.value;
      let {value} = e.target; // 키보드 입력상자 입력값 비구조화
      let 아이디= '';
      let isId = false;
      let isIdMsg = '';
      



      // 1. 정규표현식 특수문자가 아니면 삭제(공백으로 치환)
      //    문자열.replace(정규식,'');
      //e.target.value = ( e.target.value.replace(regExp1, ''));  //특수문자가 입력되면 특수문자 입력되지 않고 공백으로   
      아이디 = value.replace(regExp1, '');


      // 2. 한글입력사용안됨
      //모두 오류라면
      //한글이라면 또는 영문과 숫자 조합이 아니라면 오류 && 6~16가 아니라면 오류 && 연속된 글자가 3자 이상이면 오류
      if( regExp2.test(value) === true || regExp3.test(value) === false || regExp4.test(value) === false || regExp5.test(value) === true || regExp6.test(value) === true ){   
         isIdMsg = "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합, 한글허용안함, 공백허용안함, 동일한 문자 연속 3자 이상 허용 안함";
         isId = false;
      }

      else {                                     
         isIdMsg = '';
         isId = true;
      }

      // 상태관리와 연결
      setState ({
         ...state,
         아이디:아이디,
         isId : isId,
         isIdMsg : isIdMsg
      })
   }


   // [1]-1 아이디 중복확인
   const onClickIdOkBtn=(e)=>{
      e.preventDefault(e);
      const regExp1 = /[`~!@#$%^&*()_\-+=|\\\[\]\\\{}"';:\/?\.\,>,<]/g;   //특수문자
      const regExp2 = /[가-하ㄱ-ㅎㅏ-ㅣ]/g;    //한글
      const regExp3 = /[A-Za-z]+[0-9]/g;  //영문과 숫자의 조합 (영문은 반드시 존재해야하지만 숫자는 존재해도되고 안해도됨(*표시 사용))
      const regExp4 = /.{6,16}/g;       //모든 글자는 .으로 대체 && 6~16자 이하   
      const regExp5 = /(.)\1\1\1/g;       //동일한 연속된 문자 3글자 이상은 불가   /* 연속글자를 찾는 방법 */
      const regExp6 = /\s/g;     //공백허용안함

      let value = state.아이디; // 상태관리 아이디를 value 변수에 저장
      let 아이디= '';
      let isId = false;
      let isIdMsg = '';
      let 아이디중복확인 = false;    // 아이디 중복확인 변수
      

      아이디 = value.replace(regExp1, '');


      if( regExp2.test(value) === true || regExp3.test(value) === false || regExp4.test(value) === false || regExp5.test(value) === true || regExp6.test(value) === true ){   
         isIdMsg = "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합, 한글허용안함, 공백허용안함, 동일한 문자 연속 3자 이상 허용 안함";
         isId = false;
         아이디중복확인 = false;
      }

      else {                                     
         isIdMsg = '';
         isId = true;
         아이디중복확인 = true;
         // 데이터베이스 연동 아이디 중복확인
      }

      setState ({
         ...state,
         isIdMsg : isIdMsg,
         isId : isId,
         아이디중복확인 : 아이디중복확인
      })
      
   }


   // [2] 비밀번호 입력상자
   const onChangeUserPw=(e)=>{

      const regExp1 = /.{10,}/g;           // 10자이상~ 
      const regExp2 = /([0-9]+[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]+)+|([A-Za-z]+[0-9]+)+|([A-Za-z]+[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]+)+/g;  // 영문 또는 영문숫자
      const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g; // 한글
      const regExp4 = /\s/g;               // 공백 
      const regExp5 = /(.)\1\1/g;          // 동일한 연속된 글자 3자 

      let 비밀번호 = '';
      let {value} = e.target;
      let isPw = false;    //초기값 false
      let isPwMsg = '';

      // 10글자 이상
      if ( regExp1.test(value) === false ){
         isPwMsg = '10글자 이상 입력';
         isPw = false;
      }

      // 영문+숫자, 영문+특수문자, 특수문자와 숫자 2가지 이상 포함 (공백제외)
      else if ( regExp2.test(value) === false || regExp4.test(value) === true || regExp3.test(value) === true){
         isPwMsg = '영문/숫자/특수문자만 허용하며, 2개 이상 조합, 공백제외, 한글제외';
         isPw = false;
      }
      
      // 동일 연속글자 3개
      else if (regExp5.test(value) === true){
         isPwMsg = '동일글자3개';
         isPw = false;
      }
      
      else {
         console.log('오류없음');
         isPw = true;

      }

      

      setState ({
         ...state,
         비밀번호 : value,
         isPw : isPw,
         isPwMsg : isPwMsg
      })
   }


   // [2]-1 비밀번호 확인 입력상자
   const onChangeUserPw2=(e)=>{
      const {value} = e.target
      let isPw2 = false;
      let isPw2Msg = '';

      if ( state.비밀번호 !== value ){
         isPw2 = false;
         isPw2Msg = '동일한 비밀번호를 입력';
      }
      else {
         isPw2 = true;
         isPw2Msg = '';
      }

      setState({
         ...state,
         isPw2:isPw2,
         isPw2Msg:isPw2Msg,
         비밀번호확인:value
      })
   }


   // [3] 이름
   const onChangeUserName=(e)=>{
      const {value} = e.target;
      let isName= false;
      let isNameMsg= '';
      let 이름 = '';

      const regExp1 = /[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]/g;  // 영문
      const regExp2 = /[A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s]{1,20}/g;  // 영문
    
      이름 = value.replace(regExp1,''); // 특수문자 삭제
      
      if( regExp2.test(value)===false ){ // 
         isName= false;
         isNameMsg = '이름을 입력해 주세요.';
      }
      else {
         isName= true;
         isNameMsg = '';
      }

      setState({
         ...state,
         isName: isName,
         isNameMsg: isNameMsg,
         이름: 이름
      })
   }


   // [4] 이메일 입력상자
   const onChangeUserEmail=(e)=>{
      const {value} = e.target;
      let isEmail = false;
      let isEmailMsg = '';

      const regExp1 = /^[A-Za-z0-9`~!#$%^&*_\-+=|{}'\/?]+[\.]?[A-Za-z0-9`~!#$%^&*_\-+=|{}'\/?]*@[A-Za-z0-9~\-_\.]+\.[A-Za-z]{2,3}$/g;  // 이메일
      const regExp2 = /\s/g;  

      if(value!=='') {   
         if (regExp1.test(value) === false || regExp2.test(value) === true) {
            isEmailMsg = '이메일 형식으로 입력해주세요';
            isEmail = false;
         }
         else {
            isEmailMsg = '';
            isEmail = true;
         }
      }
      else {      
         isEmailMsg ='이메일을 입력해주세요';
      }

      setState({
         ...state,
         isEmail:isEmail,
         isEmailMsg:isEmailMsg,
         이메일:value
      })

   }

      // [4]-1 이메일 중복

   



   





   //////////// 주소 검색 및 주소 세터 함수 //////////////////////
   // 1. 주소 저장소(세션스토리지)에서 검색된 주소 가져오기(getter)
   // 2. 가져온 주소는 문자열 형태이다. JSON.stringify()로 변환된 문자열.
   //    그래서 다시 객체형태로 변환하여 사용한다. JSON.parse(); 
   // 3. 가져온 주소를 주소 입력상자에 각각 바인딩 시켜 주소를 유지시킨다. (setter)
   // 4. 그러면 새로고침해도 지워지지 않는다.
   // 5. 가져온 주소는 반드시 리액트 상태관리(statement)에 보관/관리한다. (setter)
   // 6. 입력상자와 상태관리 속성과 연결한다.
   
   const getAddressSessionStorage=()=>{

      // 가져올 주소가 없으면 리턴 (가져올 주소가 없을 시 실행안됨)
      // 예외처리1
      //if (sessionStorage.getItem('SHADDRESS')===null){
      //   return;
      //}

      // 예외처리2
      try { //가져올 주소가 없으면 리턴 (이유는 JSON.parse(null));
         const result = JSON.parse(sessionStorage.getItem('SHADDRESS'));
         setState({
            주소1:result.주소1, 
            주소2:result.주소2
         });
      }
      catch(e){
         return;
      }


      const result = JSON.parse(sessionStorage.getItem('SHADDRESS'));

      setState({주소1:result.주소1, 주소2:result.주소2});
   }

   // 리액트 훅에서 함수를 호출
   React.useEffect(()=>{
      getAddressSessionStorage()
   },[]);


   // 주소 검색 버튼 클릭 이벤트 (주소검색 팝업 띄우기)
   const onClickAddrSearch=(e)=>{
      e.preventDefault();
      const _file = './popup.html';
      const _winName = '_address_search_popup';
      const _winHeight = window.innerHeight;
      const _winWidth = window.innerWidth;
      const _popWidth = 530;
      const _popHeight = 569;
      const _top = (_winHeight-_popHeight)/2;   // 화면의 가운데 수직좌표
      const _left = (_winWidth-_popWidth)/2;    // 화면의 가운데 수평좌표
      window.open(_file,_winName,`width=${_popWidth}, height=${_popHeight}, top=${_top}, left=${_left}`);
   }
   


   
   // 주소 입력상자 onChange 이벤트
   const onChangeAddr1=(e)=>{
      //console.log(e.target.id);
      //console.log(e.target.name);
      //console.log(e.target.value);
      //console.log(e.target.type);

      // 상태관리 변수에 저장하기 (키보드로 입력받음)
      setState(e.target.value);

   }


      // 주소 입력상자 onChange 이벤트
      const onChangeAddr2=(e)=>{
         setState(e.target.value);
      }
   




   return (
      <main id="mainSignUp" className="sign_up">
         <section id="signUpsection">
            <div className="container">
               <div className="title">
                  <h2>회원가입</h2>
                  <span><i>*</i>필수입력사항</span>
            </div>
            <div className="content">
               <form name="signup_form" id="signUpForm" method= "post" action="./sign_up.php">
                  <ul>
                     <li>  {/* <!-- ID --> */}
                        <div>
                           <em>아이디<i>*</i></em>
                           <input 
                           type="text" 
                           name="user_id" 
                           id="userId" 
                           maxLength={16} 
                           placeholder="아이디를 입력해주세요"
                           onChange={onChangeUserId}
                           value={state.아이디}
                           />
                           <button 
                              className="id-ok-btn"
                              onClick={onClickIdOkBtn}
                           >중복확인</button>
                        </div>
                        <p className={`isError${state.isId===false? ' on' : ''}`}>{state.isIdMsg}</p>
                     </li>

                     <li>
                        <div>
                           <em>비밀번호<i>*</i></em>
                           <input 
                           type="text" 
                           name="user_pass" 
                           id="userPass" 
                           maxLength={16} 
                           placeholder="비밀번호를 입력해주세요"
                           onChange={onChangeUserPw}
                           value={state.비밀번호}
                           

                           />
                        </div> 
                        <p className={`isError${state.isPw===false ? ` on` : ''}`}>{state.isPwMsg}</p>
                     </li>

                     <li>
                        <div>
                           <em>비밀번호확인<i>*</i></em>
                           <input 
                           type="text" 
                           name="user_pass2" 
                           id="userPass2" 
                           placeholder="비밀번호를 한번 더 입력해주세요"
                           onChange={onChangeUserPw2}
                           value={state.비밀번호확인}
                           />
                        </div>
                        <p className={`${state.isPw2===false? ' on':'' }`}>{state.isPw2Msg}</p>
                     </li> 

                     <li>
                        <div>
                           <em>이름<i>*</i></em>
                           <input 
                           type="text" 
                           name="user_name" 
                           id="userName" 
                           maxLength={20} 
                           placeholder="이름을 입력해주세요"
                           onChange={onChangeUserName}
                           value={state.이름}
                           />
                        </div>
                        <p className={`isError${state.isName===false ? ' on' : ''}`}>{state.isNameMsg}</p>
                     </li>

                     <li>
                        <div>
                           <em>이메일<i>*</i></em>
                           <input 
                           type="text" 
                           name="user_email" 
                           id="userEmail" 
                           placeholder="예:marketKurly@kurly.com"
                           onChange={onChangeUserEmail}
                           value={state.이메일}
                           />
                           <button className="email-ok-btn">중복확인</button>
                        </div>
                        <p className={`isError${state.isEmail === false ? ' on' : ''}`}>{state.isEmailMsg}</p>
                     </li>   

                     <li className="hp hp1">
                        <div>
                           <em>휴대폰<i>*</i></em>
                           <input type="text" name="user_phone" id="userPhone" placeholder="숫자만 입력해주세요"/>
                           {/* <!-- disabled=false => 제이쿼리 구현 --> */}
                           <button className="hp-num-btn" disabled>인증번호 받기</button>
                           <button className="hp-num-btn2">다른번호 인증</button>
                        </div>
                        <p className="isError"></p>
                     </li>   

                     <li className="hp hp2 on">
                        <div>
                           <input type="text" name="userhp_num_box" id="userHpNumBox" placeholder="인증번호를 입력해주세요"/>
                           {/* <!-- disabled=false => 제이쿼리 구현 --> */}
                           <span className="hp-count"><i className="count-minutes">02</i>:<i className="count-seconds">59</i></span>
                           <button className="hp-ok-btn" disabled>인증번호 확인</button>
                        </div>
                     </li> 

                     <li className="addr addr1 on">
                        <div>
                           <em>주소<i>*</i></em>
                           <input 
                           type="text" 
                           name="addr1" 
                           id="addr1" 
                           placeholder="주소검색 API"
                           onChange={onChangeAddr1}
                           value={state.주소1}
                           />
                           <button className="address-research-btn"><img src="./img/ico_search.svg" alt=""/>재검색</button>
                        </div>
                     </li> 

                     <li className="addr addr2 on">
                        <div>
                           <input 
                           type="text" 
                           name="addr2" 
                           id="addr2" 
                           placeholder="나머지 주소를 입력해주세요"
                           onChange={onChangeAddr2}
                           value={state.주소2}
                           />
                        </div>
                     </li>

                     <li className="addr addr3 on">
                        <div>
                           <em>주소<i>*</i></em>
                           <button 
                           className="address-search-btn" 
                           onClick={onClickAddrSearch}
                           ><img src="./img/ico_search.svg" alt=""/>주소검색
                           </button>
                        </div>
                     </li>

                     <li className="addr addr4">
                        <div>
                           <strong>샛별배송</strong>
                           <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
                        </div>
                     </li>

                     <li className="gender">
                        <div>
                           <em>성별</em>
                           {/* <!-- 원래 사용되던 radio type을 버려야함 --> */}
                           <label htmlFor="male"><input type="radio" name="gender" id="male" value="남성"/>남성</label>
                           <label htmlFor="female"><input type="radio" name="gender" id="female" value="여성"/>여성</label>
                           <label htmlFor="none"><input type="radio" name="gender" id="none" value="선택안함"/>선택안함</label>
                        </div>

                     </li>

                     <li className="birth">  {/* <!-- 생년월일 --> */}
                        <div>
                           <em>생년월일</em>
                           <ul className="birth-box">
                              <li><input type="text" name="birth_year" id="year" placeholder="YYYY"/></li>
                              <li>/</li>
                              <li><input type="text" name="birth_month" id="month" placeholder="MM"/></li>
                              <li>/</li>
                              <li><input type="text" name="birth_date" id="date" placeholder="DD"/></li>
                           </ul>
                        </div>
                     </li>

                     <li className="radio">   {/* <!-- 추가입력사항 --> */}
                        <div>
                           <em>추가입력 사항</em>
                           <label htmlFor=""><input type="radio" name="addInput" id="addInput1" value="친구초대 추천인 아이디"/>친구초대 추천인 아이디</label>
                           <label htmlFor=""><input type="radio" name="addInput" id="addInput2" value="참여 이벤트명"/>참여 이벤트명</label>
                        </div>
                     </li>

                     <li className="radio add-input ">
                        <div>
                           <input type="text" name="add_input_box" id="addInputBox1" placeholder="추천인 아이디를 입력해주세요"/>
                           <input type="text" name="add_input_box" id="addInputBox2" placeholder="참여 이벤트명을 입력해주세요"/>
                           <button className="">아이디 확인</button>
                        </div>
                     </li>

                     <li className="radio add-input ">
                        <div>
                           <p className="add-input-p1">
                              가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.
                           </p>
                           <p className="add-input-p2">
                              추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.<br/>
                              가입 이후는 수정이 불가능 합니다.<br/>
                              가입 이후는 수정이 불가능 합니다.
                           </p>
                        </div>
                     </li>

                     <li className="row-line">
                        <div>
                           <hr/>
                        </div>
                     </li>

                     <li className="service service-all">
                        <div>
                           <em>이용약관동의<i>*</i></em>
                           <label htmlFor="chkAll"><input type="checkbox" name="chk_all" id="chkAll" value="전체 동의합니다."/>전체 동의합니다.</label>
                           <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                        </div>
                     </li>

                     <li className="service">
                        <div>
                           <label htmlFor="chk1"><input type="checkbox" name="chk_1" id="chk1" value="이용약관 동의"/>이용약관 동의</label><i>(필수)</i>
                        </div>
                     </li>

                     <li className="service">
                        <div>
                           <label htmlFor="chk2"><input type="checkbox" name="chk_2" id="chk2" value="개인정보 수집∙이용 동의"/>개인정보 수집∙이용 동의</label><i>(필수)</i>
                        </div>
                     </li>

                     <li className="service">
                        <div>
                           <label htmlFor="chk3"><input type="checkbox" name="chk_3" id="chk3" value="개인정보 수집∙이용 동의"/>개인정보 수집∙이용 동의</label><i>(선택)</i>
                        </div>
                     </li>

                     <li className="service">
                        <div>
                           <label htmlFor="chk4"><input type="checkbox" name="chk_4" id="chk4" value="무료배송,할인쿠폰 등 혜택/정보 수신 동의"/>무료배송,할인쿠폰 등 혜택/정보 수신 동의</label><i>(선택)</i>
                        </div>
                     </li>

                     <li className="service chk56">
                        <div>
                           <label htmlFor="chk5"><input type="checkbox" name="chk_5" id="chk5" value="SMS"/>SMS</label>
                           <label htmlFor="chk6"><input type="checkbox" name="chk_6" id="chk6" value="이메일"/>이메일</label>
                           <p>동의 시 한 달간[5%적립]+[2만원 이상 무료배송]첫 주문 후 안내</p>
                        </div>
                     </li>

                     <li className="service">
                      <div>
                           <label htmlFor="chk7"><input type="checkbox" name="chk_7" id="chk7" value="본인은 만 14세 이상입니다."/>본인은 만 14세 이상입니다.</label><i>(필수)</i>
                        </div>
                     </li>

                     <li className="row-line bottom-line">
                        <div>
                           <hr/>
                        </div>
                     </li>

                     <li className="button-box">
                        <div>
                           <button type="submit" className="submit-btn">가입하기</button>
                        </div>
                     </li>

                  </ul>

               </form>
            </div>
         </div>
      </section>
   </main>
   )
}  // 회원가입폼 컴포넌트 SignUpComponent

SignUpComponent.defaultProps = {
   회원가입 : {

      아이디:'',           
      아이디중복확인:false,
      isId:false,
      isIdMsg:'',
      
      비밀번호:'',         
      isPw : false,
      isPwMsg:'',

      비밀번호확인:'', 
      isPw2 : false,
      isPw2Msg : '',

      
      이름:'',        
      isName:false,
      isNameMsg :'',
      
      이메일:'',           
      이메일중복확인:false,
      isEmail:false,
      isEmailMsg:'',
      
      휴대폰:'',           
      휴대폰인증번호:0,  
      분:2,
      초:59,
      setId:0,

      주소1:'',             
      주소2:'',             
      성별:'' ,            
      생년월일:'',         
      추가입력사항:'',     
      이용약관동의: []    
   }
}
