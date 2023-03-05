import React from 'react';
import {Link, Outlet} from 'react-router-dom';

export default function HeaderComponent(){
   return (
      <>
         <header id="header"> 

         <div className="row1">
            <div className="container">
               <ul>
                  <li><Link to="/회원가입">회원가입</Link></li>
                  <li><i>|</i></li>
                  <li><a href="./member/sign_login">로그인</a></li>
                  <li><i>|</i></li>
                  <li className="service-box">
                     <Link to="./member/board/board1" className="service-center-btn">고객센터<img src="./img/ico_down_16x10.png" alt=""/></Link>
                     <div className="top-tooltip">
                        <ul>
                           <li><Link to="/공지사항">공지사항</Link></li>
                           <li><Link to="/자주하는 질문">자주하는 질문</Link></li>
                           <li><Link to="/1:1문의">1:1문의</Link></li>
                           <li><Link to="/대량주문 문의">대량주문 문의</Link></li>
                        </ul>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
         <div className="row2">
            <div className="container">
               <div className="left">
                  <ul>
                     <li> 
                        <h1>
                           <Link to="./" title="마켓컬리">
                              <img src="./img/logo_kurly.svg" alt=""/>
                              <span>마켓컬리</span>   
                           </Link>
                        </h1>
                     </li>
                     <li> 
                        <i>|</i>
                     </li>
                     <li> 
                        <span>
                           <Link to="/뷰티컬리" title="뷰티컬리">뷰티컬리 <img src="./img/n_red.svg" alt=""/></Link>
                        </span>
                     </li>
                  </ul>
               </div>
               <div className="center">
                  <form name="search_form" id="searchForm" method="post" action="./search.php">
                     <div className="search-box">
                        <input type="text" name="search" id="search" placeholder="검색어를 입력해주세요"/>
                        <a href="!#" className="search-btn" title="search"><img src="./img/search.svg" alt=""/></a>
                     </div>
                  </form>
               </div>
               <div className="right">
                  <div className="map-tooltip-box">
                     <a href="!#" title="배송지" className="map-tootip-btn"><img src="./img/map.svg" alt=""/></a>
                     <div className="map-tooltip-memnu">
                        <ul>
                           <li>
                              <em>배송지를 등록</em>
                              <span>구매 가능한 상품을 확인하세요!</span>
                           </li>
                           <li>
                              <button className="login-btn">로그인</button>
                              <button className="address-search-btn"><img src="./img/search_white.png" alt=""/><span>주소검색</span></button>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div>   
                     <a href="!#" title="찜하기"><img src="./img/heart.svg" alt=""/></a>
                  </div>
                  <div>
                     <a href="!#" title="장바구니"><img src="./img/cart.svg" alt=""/></a>
                  </div>
               </div>
            </div>
         </div>
         <div className="row3">
            <div className="container">
               <div className="left">
                  <a href="!#" title="카테고리">
                     <img src="./img/app_bar.svg" alt=""/>
                     <strong>카테고리</strong>
                  </a>
               </div>
               <div className="center">
                  <ul>
                     <li><Link to="./신상품" className="main-btn on" title="신상품">신상품</Link></li>
                     <li><Link to="./베스트" className="main-btn" title="베스트">베스트</Link></li>
                     <li><Link to="./알뜰쇼핑" className="main-btn" title="알뜰쇼핑">알뜰쇼핑</Link></li>
                     <li><Link to="./특가/혜택택" className="main-btn" title="특가/혜택">특가/혜택</Link></li>
                  </ul>
               </div>
               <div className="right">
                  <span>
                     <a href="!#">
                        <em>샛별<i>·</i>낮</em><strong>배송안내</strong>
                     </a>
                  </span>
               </div>
            </div>
         </div>
         </header>
         <Outlet/>
      </>
      
      
      
   );
};

