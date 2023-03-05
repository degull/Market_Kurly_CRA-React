import React from 'react';

export default function SignUpComponent(){


   // 상태관리(변수, 세터변수)
   const [state, setState] = React.useState({
      주소1:'',
      주소2:''
   });






   // 1. 주소 저장소(세션스토리지)에서 검색된 주소 가져오기(getter)
   // 2. 가져온 주소는 문자열 형태이다. JSON.stringify()로 변환된 문자열.
   //    그래서 다시 객체형태로 변환하여 사용한다. JSON.parse(); 
   // 3. 가져온 주소를 주소 입력상자에 각각 바인딩 시켜 주소를 유지시킨다. (setter)
   // 4. 그러면 새로고침해도 지워지지 않는다.
   // 5. 가져온 주소는 반드시 리액트 상태관리(statement)에 보관/관리한다. (setter)
   // 6. 입력상자와 상태관리 속성과 연결한다.
   
   const getAddressSessionStorage=()=>{

      // 가져올 주소가 없으면 리턴
      if (sessionStorage.getItem('SHADDRESS')===null){
         return;
      }


      const result = JSON.parse(sessionStorage.getItem('SHADDRESS'));

      setState({주소1:result.주소1, 주소2:result.주소2});
   }

   // 리액트 훅에서 함수를 호출
   React.useEffect(()=>{
      getAddressSessionStorage()
   },[]);


   
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
                           <input type="text" name="user_id" id="userId" maxLength={16} placeholder="아이디를 입력해주세요"/>
                           <button className="id-ok-btn">중복확인</button>
                        </div>
                        <p className="isError"></p>
                     </li>

                     <li>
                        <div>
                           <em>비밀번호<i>*</i></em>
                           <input type="text" name="user_pass" id="userPass" maxLength={16} placeholder="비밀번호를 입력해주세요"/>
                        </div> 
                        <p className="isError"></p>
                     </li>

                     <li>
                        <div>
                           <em>비밀번호확인<i>*</i></em>
                           <input type="text" name="user_pass2" id="userPass2" placeholder="비밀번호를 한번 더 입력해주세요"/>
                        </div>
                        <p className="isError"></p>
                     </li> 

                     <li>
                        <div>
                           <em>이름<i>*</i></em>
                           <input type="text" name="user_name" id="userName" maxLength={20} placeholder="이름을 입력해주세요"/>
                        </div>
                        <p className="isError"></p>
                     </li>

                     <li>
                        <div>
                           <em>이메일<i>*</i></em>
                           <input type="text" name="user_email" id="userEmail" placeholder="예:marketKurly@kurly.com"/>
                           <button className="email-ok-btn">중복확인</button>
                        </div>
                        <p className="isError"></p>
                     </li>   

                     <li className="hp hp1">
                        <div>
                           <em>휴대폰<i>*</i></em>
                           <input type="text" name="user_phone" id="userPhone" placeholder="숫자만 입력해주세요"/>
                           {/* <!-- disabled=false => 제이쿼리 구현 --> */}
                           <button className="hp-num-btn" disabled="true">인증번호 받기</button>
                           <button className="hp-num-btn2" disabled="true">다른번호 인증</button>
                        </div>
                        <p className="isError"></p>
                     </li>   

                     <li className="hp hp2 on">
                        <div>
                           <input type="text" name="userhp_num_box" id="userHpNumBox" placeholder="인증번호를 입력해주세요"/>
                           {/* <!-- disabled=false => 제이쿼리 구현 --> */}
                           <span className="hp-count"><i className="count-minutes">02</i>:<i className="count-seconds">59</i></span>
                           <button className="hp-ok-btn" disabled="false">인증번호 확인</button>
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
                           value={state}
                           />
                           <button onClick={onClickResearchAddress} value={} className="address-research-btn"><img src="./img/ico_search.svg" alt=""/>재검색</button>
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
                           <button className="address-search-btn"><img src="./img/ico_search.svg" alt=""/>주소검색</button>
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
}

