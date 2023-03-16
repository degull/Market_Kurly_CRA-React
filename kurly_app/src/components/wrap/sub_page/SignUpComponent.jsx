import React from 'react';

export default function SignUpComponent( {회원가입, setCountPlay, setId, seconds, minutes, } ){

/*    React.useEffect(()=>{
      console.log('상위컴포넌트 seconds : ',seconds);
      console.log('상위컴포넌트 minutes : ',minutes);
      console.log('상위컴포넌트 setId : ',setId);
   },[setId]);

 */

   // 상태관리(변수, 세터변수)
   const [state, setState] = React.useState( 회원가입 );

   // [0] 컨펌 모달 닫기 버튼 클릭 이벤트
   const onClickModalClose=(e)=>{
      e.preventDefault();
      setState({
         ...state,
         isModal : false
      })
   }

   console.log (state);

   // [1] 아이디 입력상자
   const onChangeUserId=(e)=>{
      e.preventDefault();
      const regExp1 = /[`~!@#$%^&*()_\-+=|\\[]{}'";:\/?.>,<]/g; //특수문자
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
      const regExp1 = /[`~!@#$%^&*()_\-+=|\\[]{}'";:\/?.>,<]/g; //특수문자
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

      let isModal = false;
      let modalMsg = '';



      

      아이디 = value.replace(regExp1, '');


      if( regExp2.test(value) === true || regExp3.test(value) === false || regExp4.test(value) === false || regExp5.test(value) === true || regExp6.test(value) === true ){   
         isIdMsg = "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합, 한글허용안함, 공백허용안함, 동일한 문자 연속 3자 이상 허용 안함";
         isId = false;
         아이디중복확인 = false;
         isModal = true;
         modalMsg = "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합, 한글허용안함, 공백허용안함, 동일한 문자 연속 3자 이상 허용 안함";
      }

      else {                                     
         isIdMsg = '';
         isId = true;
         아이디중복확인 = true;

         // 데이터베이스 연동 아이디 중복확인
         // 중복된 아이디가 없을 때 아래 메시지가 나타난다
         isModal = true;
         modalMsg = "사용가능한 아이디 입니다";

      }

      setState ({
         ...state,
         isIdMsg : isIdMsg,
         isId : isId,
         아이디중복확인 : 아이디중복확인,
         isModal : isModal,
         modalMsg : modalMsg
      })
      
   }


   // [2] 비밀번호 입력상자
   const onChangeUserPw=(e)=>{

      const regExp1 = /.{10,}/g;           // 10자이상~ 
      const regExp2 = /[`~!@#$%^&*()_\-+=|\\[]{}'";:\/?.>,<]/g; //특수문자
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

      const regExp1 = /[`~!@#$%^&*()_\-+=|\\[]{}'";:\/?.>,<]/g; //특수문자
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

      const regExp1 = /^[A-Za-z0-9`~!#$%^&*_\-+=|{}'/?]+[.]?[A-Za-z0-9`~!#$%^&*_\-+=|{}'/?]*@[A-Za-z0-9~\-_.]+\.[A-Za-z]{2,3}$/g;  // 이메일
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
      else {   // 이메일이 공백이면
         isEmailMsg ='이메일을 입력해주세요';

      }

      setState({
         ...state,
         isEmail:isEmail,
         isEmailMsg:isEmailMsg,
         이메일:value,

      })

   }

      // [4]-1 이메일 중복 확인 버튼 클릭 이벤트
      const onClickEmailOk=(e)=>{
         e.preventDefault();
         let isEmail = false;
         let isEmailMsg = '';
         let isModal = '';
         let modalMsg = '';

         const regExp1 = /^[A-Za-z0-9`~!#$%^&*_\-+=|{}'/?]+[.]?[A-Za-z0-9`~!#$%^&*_\-+=|{}'/?]*@[A-Za-z0-9~\-_.]+\.[A-Za-z]{2,3}$/g;  // 이메일
         const regExp2 = /\s/g; 

         if(state.이메일!=='') {   
            if (regExp1.test(state.이메일) === false || regExp2.test(state.이메일) === true) {
               isEmailMsg = '이메일 형식으로 입력해주세요';
               isEmail = false;
               isModal = true;
               modalMsg = "이메일 형식으로 입력해주세요."
   
            }
            else {
               isEmailMsg = '';
               isEmail = true;
               // 데이터베이스 이메일 중복확인

               isModal = true;
               modalMsg = "사용가능한 이메일 입니다.";
            }
         }
         else {   // 이메일이 공백이면
            isEmailMsg ='이메일을 입력해주세요';
         }
   
         setState({
            ...state,
            isEmail:isEmail,
            isEmailMsg:isEmailMsg,
            이메일:state.이메일,
            isModal : isModal,
            modalMsg : modalMsg
         })

      }




      // [5]-1 휴대폰 입력상자
      // onChange 이벤트 (button의 경우 clickEvent)
      const onChangeUserHp=(e)=>{

         const {value} = e.target;
         let 휴대폰 = '';
         let isHpDisabled = true;
         let isHp = false;
         let isHpMsg = '';
         
         const regExp = /[^0-9]/g;

         // 숫자가 아니면 삭제
         휴대폰 = value.replace(regExp, '');
         

         console.log(regExp.test(value));



         if ( value.length >= 1 ){
            isHpDisabled = false;
            isHp = false;
            isHpMsg = ''
         }

         else {
            isHpDisabled = true;
            isHp = true;
            isHpMsg = '휴대폰 번호를 입력해주세요.'
         }

         setState({
            ...state,
            휴대폰:휴대폰,
            isHpDisabled : isHpDisabled,
            isHp : isHp,
            isHpMsg:isHpMsg
         })

      }


      // [5]-2 휴대폰 인증번호 발송
      // JSX에서 휴대폰 버튼 클릭 이벤트 등록
      // 함수등록
      // 버튼의 이벤트 제거
      // 변수등록 : 인증번호
      // 정규표현식 등록 (전화번호)
      // 인증번호 랜덤 전송

      const onClickHpNumberBtn=(e)=>{
         e.preventDefault();

         const regExp = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/g;
         let 휴대폰인증번호 = null;
         let isHp2 = false;
         let isModal = false;
         let modalMsg = "";

         
         if ( regExp.test(state.휴대폰) === false) {
            isHp2 = false;
            isModal = true;
            modalMsg = '잘못된 휴대폰 번호 입니다. 확인 후 다시 시도해주세요';
         }
          
         else {
            isHp2 = true;
            const randomNum = Math.floor(Math.random() * 900000+100000);
            isModal = true;
            modalMsg = `인증번호가 발송되었습니다. ${randomNum}`;

            휴대폰인증번호 = randomNum;
            setCountPlay();
         
         }

         setState({
            ...state,
            isHp2:isHp2,
            휴대폰인증번호:휴대폰인증번호,
            isModal : isModal,
            modalMsg : modalMsg
         })

      }


      // [5]-3 인증번호 비교 입력상지
      const onChangeHp2=(e)=>{
         const {value} = e.target;
         let isDisabled2 = true;

         if ( value.length >= 1) {
            isDisabled2 = false;
         }
         else {
            isDisabled2 = true;
         }

         setState({
            ...state,
            인증번호입력값 : value,
            isDisabled2 : isDisabled2
         })
      }



      // [5]-4 인증번호 확인 버튼 클릭 이벤트
      const onClickHp2=(e)=>{
         e.preventDefault();
         let isModal = false;
         let modalMsg = '';
         let isHpNumBtn2 = false;

         if ( Number(state.휴대폰인증번호) === Number(state.인증번호입력값)) {
            isModal = true;
            modalMsg = '인증에 성공하였습니다.';
            isHpNumBtn2 = true;
            clearInterval(setId);


         }
         else {
            isModal = true;
            modalMsg = '잘못된 인증코드 입니다.';
            isHpNumBtn2 = false;
         }

         setState({
            ...state,
            isHp:false,
            isHp2:false,
            isModal : isModal,
            modalMsg : modalMsg,
            isHpNumBtn2:isHpNumBtn2
         });
   
   
      }


      // [5]-5 다른번호 인증
      const onClickhpNumBtn2=(e)=>{
         e.preventDefault();

         setState({
            ...state,
            isHpNumBtn2 : false, //다른번호 인증버튼 감추기
            휴대폰 : '',
            인증번호입력값 : '',
         })
      }



      // [6]. 주소입력상자 온체인지 이벤트
      const onChangeAddr1=(e)=>{
         setState (e.target.value);
      }

      const onChangeAddr2=(e)=>{
         setState (e.target.value);
      }


      // 주소 팝업창 API 띄우기
      const addressPopUpAPI=(e)=>{
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


   // [6]-1.  주소 검색 버튼 클릭 이벤트 (주소검색 팝업 띄우기)
   const onClickAddrSearch=(e)=>{
      e.preventDefault();
      addressPopUpAPI();
   }

   
   // [6]-2. 주소 재검색 버튼 클릭 이벤트
   const onClickResearchAddr=(e)=>{
      e.preventDefault();
      addressPopUpAPI();
   }


   
   ////////////[6]-3 주소 검색 및 주소 세터 함수 //////////////////////
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
      if (sessionStorage.getItem('SHADDRESS')===null){
         setState({
            ...state,
            isAddr : false    //가장 긴 주소검색 버튼만 보이도록
         });
         return;
      }

      // 예외처리2
      try { //가져올 주소가 없으면 리턴 (이유는 JSON.parse(null));
         const result = JSON.parse(sessionStorage.getItem('SHADDRESS'));

         // 주소1, 주소2 입력 상자 보이기
         // 재검색 버튼 보이기
         // 주소 검색버튼 숨기기

         setState({
            ...state,
            주소1:result.주소1, 
            주소2:result.주소2,
            isAddr : true
         });
      }
      catch(e){
         return;
      }

   }

   // 리액트 훅에서 함수를 호출
   React.useEffect(()=>{
      getAddressSessionStorage()
   },[state.주소1]);





   // [7] 성별 : 라디오버튼
   const onChangeGender=(e)=>{
      e.preventDefault();
      setState({
         ...state,
         성별 : e.target.value
      })
   }


   // [8]. 생년월일
   // [8]-1. 생년 입력상자 onChange 이벤트
   // 숫자만 입력하도록 정규표현식 입력제한 숫자가 아니면 삭제되도록
   const onChangeBirthYear=(e)=>{
      const regExp = /[^0-9]/g;
      let imsi = ''; //임시변수
      imsi = e.target.value.replace(regExp, '');
      setState({
         ...state,
         생년 : imsi
      })
   }

   // [8]-2. 생월 입력상자 onChnage 이벤트
   const onChangeBirthMonth=(e)=>{
      const regExp = /[^0-9]/g;
      let imsi = '';
      imsi = e.target.value.replace(regExp,'');

      setState({
         ...state,
         생월 : imsi
      })
   }

   // [8]-3. 생일 입력상자 onChange 이벤트
   const onChangeBirthDate=(e)=>{
      const regExp = /[^0-9]/g;
      let imsi = e.target.value.replace(regExp,'');

      setState({
         ...state,
         생일:imsi
      })
   }


   // [8]-4. 생년, 생월, 생일 입력제한 함수
   //      생년,생월,생일 모두 빈칸이면 공백 아니면 아래조건
   //      생년 - 1. 100년 이하만 입력(1923~2023)
   //      생년 - 2. 14미만 입력불가
   //      생년 - 3. 미래년도 입력불가
   //      생월 - 1 ~ 12 
   //      생일 - 1 ~ 31 
   const birthCheckFn=()=>{
      
      if ( state.생년 === '' && state.생월 === '' && state.생일 === ''){
         return;
      }
      // 생년
      else { 
         if (state.생년 === ''){
            setState({
               ...state,
               isBirth : true,
               isBirthMsg : '태어난 년도 4자리를 정확하게 입력해주세요'
            })
         }

         // 1923이상 입력 가능
         else if ( Number(state.생년) < (new Date().getFullYear()-100) ){
            setState({
               ...state,
               isBirth : true,
               isBirthMsg : "생년월일을 다시 확인해주세요.(100세 이하 가능)"
            })
         }

         // 14세 미만 입력불가 
         else if ( Number(state.생년) >= (new Date().getFullYear()-14) ){
            setState({
               ...state,
               isBirth : true,
               isBirthMsg : '만 14세 미만은 가입이 불가합니다'
            })
         }
         else {
            // 생월
            if (state.생월 ===' '){
               setState({
                  ...state,
                  isBirth:true,
                  isBirthMsg:'태어난 월을 정확하게 입력해주세요.'
               })
            }
            else if ( Number(state.생월) >= 1 && Number(state.생월) <= 12 ){
               setState({
                  ...state,
                  isBirth : true,
                  isBirthMsg : '태어난 월을 정확하게 입력해주세요.'
               })
            }
            else {
               //생일
               if (state.생일 === ''){
                  setState({
                     ...state,
                     isBirth:true,
                     isBirthMsg : '태어난 일을 정확하게 입력해주세요.'
                  })
               }
               else if ( Number(state.생일) >=1 && Number(state.생일) <= 31 ){
                  setState({
                     ...state,
                     isBirth : true,
                     isBirthMsg:'태어난 일을 정확하게 입력해주세요.'
                  })
               }
               else {
                  setState({
                     ...state,
                     isBirth:false,
                     isBirthMsg:''
                  })
               }

            }
         }

      }

   }

   React.useEffect(()=>{
      birthCheckFn();
   },[state.생년, state.생월, state.생일]);


   // [9]. 추가입력사항 : 라디오버튼
   const onChangeAddInput=(e)=>{
      let isAddOn = false;

      // 선택된 아이디가 addInput1 이면 첫번째 친구초대 추천인 아이디
      // 선택된 아이디가 addInput2 이면 두번째 참여 이벤트명
      if (e.target.id === 'addInput1') {
         isAddOn = false;
         
      }
      else {
         isAddOn = true;
      }

      setState({
         ...state,
         추가입력사항 : e.target.value,
         isAdd : true,
         isAddOn : isAddOn
      })
   }

      // [10]. 이용약관동의 : 체크박스

      // [11]. 유효성검사 서버에 전송

      // [12]. 데이터베이스 서버 : 회원가입 테이블 생성

      // [13]. PHP => SQL => DB저장

      // [14]. 아이디 중복확인

      // [15]. 이메일 중복확인

      // [16]. 깃허브 배포(CORS)

      // [17]. 로그인 => 회원가입 끝 => 회원정보 수정

      // [18]. 로그아웃

      // [19]. 회원관리 목록 출력 게시판

      // [20].  공지사항 게시판

   




   return (
      <>
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
                           <button onClick={onClickEmailOk} className="email-ok-btn">중복확인</button>
                        </div>
                        <p className={`isError${state.isEmail === false ? ' on' : ''}`}>{state.isEmailMsg}</p>
                     </li>   

                     <li className="hp hp1">
                        <div>
                           <em>휴대폰<i>*</i></em>
                           <input 
                           type="text" 
                           name="user_phone" 
                           id="userPhone" 
                           placeholder="숫자만 입력해주세요"
                           onChange={onChangeUserHp}
                           value={state.휴대폰}
                           />
                           {/* <!-- disabled=false => 제이쿼리 구현 --> */}
                           <button 
                           className={`hp-num-btn ${state.isHpDisabled===false? ' on' : ''}`} 
                           disabled={state.isHpDisabled}
                           onClick={onClickHpNumberBtn}
                           >인증번호 받기</button>
                           <button onClick={onClickhpNumBtn2} className={`hp-num-btn2${state.isHpNumBtn2 === true ?' on' : ''}`}>다른번호 인증</button>
                        </div>
                        <p className={`isError${state.isHp===true ? ' on' : ''}`}>{state.isHpMsg}</p>
                     </li>   

                     <li className={`hp hp2 ${state.isHp2 === true ? ' on' : ''}`}>
                        <div>
                           <input 
                           type="text" 
                           name="userhp_num_box"
                           id="userHpNumBox" 
                           placeholder="인증번호를 입력해주세요"
                           onChange={onChangeHp2}
                           value={state.인증번호입력값}
                           />
                           {/* <!-- disabled=false => 제이쿼리 구현 --> */}
                           <span className="hp-count"><i className="count-minutes">{minutes}</i>:<i className="count-seconds">{seconds}</i></span>
                           <button onClick={onClickHp2} className={`hp-ok-btn${state.isDisabled2===false?' on':''}`} disabled={state.isDisabled2}>인증번호 확인</button>
                        </div>
                     </li> 

                     <li className={`addr addr1${state.isAddr === true ? ' on' :''}`}>
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
                           <button 
                           onClick={onClickResearchAddr} 
                           className="address-research-btn"
                           ><img src="./img/ico_search.svg" alt=""/>재검색</button>
                        </div>
                     </li> 

                     <li className={`addr addr2${state.isAddr === true ? ' on' :''}`}>
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

                     <li className={`addr addr3${state.isAddr === true ? ' on' :''}`}>
                        <div>
                           <em>주소<i>*</i></em>
                           <button 
                           className="address-search-btn" 
                           onClick={onClickAddrSearch}
                           ><img src="./img/ico_search.svg" alt=""/>주소검색</button>
                        </div>
                     </li>

                     <li className={`addr addr4${state.isAddr === true ? ' on' :''}`}>
                        <div>
                           <strong>샛별배송</strong>
                           <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
                        </div>
                     </li>

                     <li className="gender">
                        <div>
                           <em>성별</em>
                           {/* <!-- 원래 사용되던 radio type을 버려야함 --> */}
                           <label htmlFor="male">
                              <input 
                              onChange={onChangeGender} 
                              type="radio" 
                              name="gender" 
                              id="male" 
                              value="남성"
                              checked={state.성별.includes('남성')}
                              />
                              남성
                              </label>
                           <label htmlFor="female">
                              <input 
                              onChange={onChangeGender} 
                              type="radio" 
                              name="gender" 
                              id="female" 
                              value="여성"
                              checked={state.성별.includes('여성')}
                              />
                              여성
                              </label>
                           <label htmlFor="none">
                              <input 
                              onChange={onChangeGender} 
                              type="radio" 
                              name="gender" 
                              id="none" 
                              value="선택안함"
                              checked={state.성별.includes('선택안함')}
                              />
                              선택안함
                              </label>
                        </div>

                     </li>

                     <li className="birth">  {/* <!-- 생년월일 --> */}
                        <div>
                           <em>생년월일</em>
                           <ul className="birth-box">
                              <li>
                                 <input 
                                    type="text" 
                                    name="birth_year" 
                                    id="birthYear" 
                                    placeholder="YYYY"
                                    onChange={onChangeBirthYear}
                                    value={state.생년}
                                    maxLength={4}
                                 />
                                 </li>
                              <li>/</li>
                              <li>
                                 <input 
                                    type="text" 
                                    name="birth_month" 
                                    id="birthMonth" 
                                    placeholder="MM"
                                    onChange={onChangeBirthMonth}
                                    value={state.생월}
                                    maxLength={2}
                                 />
                                 </li>
                              <li>/</li>
                              <li>
                                 <input 
                                    type="text" 
                                    name="birth_date" 
                                    id="BirthDate" 
                                    placeholder="DD"
                                    onChange={onChangeBirthDate}
                                    value={state.생일}
                                    maxLength={2}
                                 />
                                 </li>
                           </ul>
                        </div>
                        <p className={state.isBirth === true ? ' on' : ''}>{state.isBirthMsg}</p>
                     </li>

                     <li className="radio">   {/* <!-- 추가입력사항 --> */}
                        <div>
                           <em>추가입력 사항</em>
                           <label htmlFor="addInput1">
                              <input 
                                 type="radio" 
                                 name="addInput" 
                                 id="addInput1" 
                                 value="친구초대 추천인 아이디"
                                 onChange={onChangeAddInput}
                                 checked={state.추가입력사항.includes('친구초대 추천인 아이디')}
                              />
                              친구초대 추천인 아이디
                           </label>

                           <label htmlFor="addInput2">
                              <input 
                                 type="radio" 
                                 name="addInput" 
                                 id="addInput2" 
                                 value="참여 이벤트명"
                                 onChange={onChangeAddInput}
                                 checked={state.추가입력사항.includes('참여 이벤트명')}
                              />
                              참여 이벤트명
                           </label>
                        </div>
                        
                     </li>

                     <li className={`radio add-input${state.isAdd === false ? '' :(state.isAddOn === false ? ' on1' :' on2')}`}>
                        <div>
                           <input type="text" name="add_input_box" id="addInputBox1" placeholder="추천인 아이디를 입력해주세요"/>
                           <input type="text" name="add_input_box" id="addInputBox2" placeholder="참여 이벤트명을 입력해주세요"/>
                           <button className="addr-search-btn">아이디 확인</button>
                        </div>
                     </li>

                     <li className={`radio add-input${state.isAdd === false ? '' :(state.isAddOn === false ? ' on1' :' on2')}`}>
                        <div>
                           <p className="add-input-p1">
                              가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.
                           </p>
                           <p className="add-input-p2">
                              추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.<br/>
                              가입 이후는 수정이 불가능 합니다.<br/>
                              대소문자 및 띄어쓰기에 유의해주세요.
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

      {/* FORM EVENT MODAL */}
      {/* isModal true 이면 show & false이면 hide */}
      {

         state.isModal && (
            <div id="formEventModal">
               <div class="wrap">
                  <div class="container">
                     <div class="message-box">
                        <p class="msg">{state.modalMsg}</p>
                     </div>
                     <div class="button-box">
                        <button onClick={onClickModalClose} class="msg-modal-close-btn">확인</button>
                     </div>
                  </div>
               </div>
            </div>
         )
      }
      </>

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
      isHpDisabled : true,
      isHp : false,
      isHpMsg : '',
      isHp2 : false,
      isHpNumBtn2 : false,

      인증번호입력값:'',
      isDisabled2:true,

      휴대폰인증번호:0,  


      주소1:'',             
      주소2:'',   
      isAddr : false,

      성별:'선택안함' , 

      생년:'',
      생월:'',
      생일:'',

      생년월일:'',
      isBirth:false,
      isBirthMsg : '',
      
      추가입력사항:'',     
      isAdd : false,
      isAddOn : false,

      이용약관동의: [],

      isModal : false,   //컨펌모달
      modalMsg : '',    //컨펌 모달 메시지
   }
}
