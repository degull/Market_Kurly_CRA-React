import React from 'react';

export default function MainComponent(){


   const scriptCreateElement=(src)=>{
      //script js 파일을 다시 생성하고 싶음
      // 1. 스크립트 태그 만들기 (생성)
      const scriptElement = document.createElement('script');

      // 2. 스크립트 태그에 속성 지정하기 type속성 text/babel 값을 설정
      //scriptElement.setAttribute('type', 'text/babel'); 
      scriptElement.setAttribute('id', 'script'); 
      scriptElement.setAttribute('src', './js/intro_main.js'); 

      // 3. 생성된 스크립트를 본문(body)에 붙인다.
      document.body.appendChild(scriptElement);
   }




   /* 만들었다가 제거!! */

   // 리액트 훅 : 요소생성 & 동적으로 동작유도
   React.useEffect(()=>{

      scriptCreateElement('./js/intro_main.js');

   },[]);


   // 리액트 훅 : 생성된 요소를 제거한다
   React.useEffect(()=>{
      // 부모요소에서 반드시 제거한다. 제거할 자식 선택(script)
      let parentElement = document.getElementById('script').parentElement;
      
      // 삭제할 자식을 선택한다. 
      let childElement = document.getElementById('script');

      //부모가 자식 요소를 선택하여 제거한다. 
      parentElement.removeChild(childElement);
   },[]);








   return (
      <main id="main">
         <section id="section1">
            <div className="slide-container">

               <div className="slide-view">
                  <ul className="slide-wrap">      

                  {/*   <!-- li*20>a[href=#]>img[src=./img/main_slide$$.jpg] -->*/}   
                  <li className="slide slide20"><a href="!#"><img src="./img/main_slide20.jpg" alt=""/></a></li>
                     <li className="slide slide01"><a href="!#"><img src="./img/main_slide01.jpg" alt=""/></a></li>
                     <li className="slide slide02"><a href="!#"><img src="./img/main_slide02.jpg" alt=""/></a></li>
                     <li className="slide slide03"><a href="!#"><img src="./img/main_slide03.jpg" alt=""/></a></li>
                     <li className="slide slide04"><a href="!#"><img src="./img/main_slide04.jpg" alt=""/></a></li>
                     <li className="slide slide05"><a href="!#"><img src="./img/main_slide05.jpg" alt=""/></a></li>
                     <li className="slide slide06"><a href="!#"><img src="./img/main_slide06.jpg" alt=""/></a></li>
                     <li className="slide slide07"><a href="!#"><img src="./img/main_slide07.jpg" alt=""/></a></li>
                     <li className="slide slide08"><a href="!#"><img src="./img/main_slide08.jpg" alt=""/></a></li>
                     <li className="slide slide09"><a href="!#"><img src="./img/main_slide09.jpg" alt=""/></a></li>
                     <li className="slide slide10"><a href="!#"><img src="./img/main_slide10.jpg" alt=""/></a></li>
                     <li className="slide slide11"><a href="!#"><img src="./img/main_slide11.jpg" alt=""/></a></li>
                     <li className="slide slide12"><a href="!#"><img src="./img/main_slide12.jpg" alt=""/></a></li>
                     <li className="slide slide13"><a href="!#"><img src="./img/main_slide13.jpg" alt=""/></a></li>
                     <li className="slide slide14"><a href="!#"><img src="./img/main_slide14.jpg" alt=""/></a></li>
                     <li className="slide slide15"><a href="!#"><img src="./img/main_slide15.jpg" alt=""/></a></li>
                     <li className="slide slide16"><a href="!#"><img src="./img/main_slide16.jpg" alt=""/></a></li>
                     <li className="slide slide17"><a href="!#"><img src="./img/main_slide17.jpg" alt=""/></a></li>
                     <li className="slide slide18"><a href="!#"><img src="./img/main_slide18.jpg" alt=""/></a></li>
                     <li className="slide slide19"><a href="!#"><img src="./img/main_slide19.jpg" alt=""/></a></li>
                     <li className="slide slide20"><a href="!#"><img src="./img/main_slide20.jpg" alt=""/></a></li>
                     <li className="slide slide01"><a href="!#"><img src="./img/main_slide01.jpg" alt=""/></a></li>
                  </ul>
               </div>

               {/* <!-- 좌우 화살버튼 abs --> */}
               <span className="arrow arrow-left-box"><a href="!#" className="arrow-left-btn" title="slide preview"><i></i></a></span>
               <span className="arrow arrow-right-box"><a href="!#" className="arrow-right-btn" title="slide next"><i></i></a></span>

               {/* <!-- 페이지네이션 현재페이지/전체페이지 --> */}
               <span className="page-box">
                  <em className="current-page">1</em> <i>/</i> <em className="total-page">20</em> 
               </span>

            </div>
         </section>
         <section id="section2" className="section-slide-public">
            <div className="title"><h2>이 상품 어때요?</h2></div>
            <div className="slide-container">
               <div className="slide-view">
                  <ul className="slide-wrap">
                     {/* <!-- li.slide.slide$*20 --> */}
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><em>48,000원</em></h3>                           
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>

               <a href="!#" className="arrow-btn  arrow-right"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
               <a href="!#" className="arrow-btn  arrow-left"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
            </div>
         </section>
         <section id="section3">
            <div className="container">
               <a href="!#">
                  <img src="./img/dalba.banner.jpg" alt=""/>
               </a>
            </div>
         </section>
         <section id="section4" className="section-slide-public">
            <div className="title"><h2>놓치면 후회할 가격</h2></div>
            <div className="slide-container">
               <div className="slide-view">
                  <ul className="slide-wrap">
                     {/* <!-- li.slide.slide$*20 --> */}
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><em>48,000원</em></h3>                           
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>

               <a href="!#" className="arrow-btn  arrow-right"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
               <a href="!#" className="arrow-btn  arrow-left"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
            </div>
         </section>
         <section id="section5"> {/* <!-- banner --> */}
            <div className="container">
               <a href="!#">
                  <img src="./img/chicken.banner.jpg" alt=""/>
               </a>
            </div>
         </section>

         <section id="section6" className="section-slide-public">
            <div className="title"><h2>이 상품 어때요?</h2></div>
            <div className="slide-container">
               <div className="slide-view">
                  <ul className="slide-wrap">
                     {/* <!-- li.slide.slide$*20 --> */}
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><em>48,000원</em></h3>                           
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>

               <a href="!#" className="arrow-btn  arrow-right"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
               <a href="!#" className="arrow-btn  arrow-left"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
            </div>
         </section>

         <section id="section7">
            <div className="container">
               <a href="!#">
                  <img src="./img/hair_banner.jpg" alt=""/>
               </a>
            </div>
         </section>

         <section id="section8" className="section-slide-public">
            <div className="title"><h2>2023 선물세트 best</h2></div>
            <div className="slide-container">
               <div className="slide-view">
                  <ul className="slide-wrap">
                     {/* <!-- li.slide.slide$*20 --> */}
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><em>48,000원</em></h3>                           
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>

               <a href="!#" className="arrow-btn  arrow-right"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
               <a href="!#" className="arrow-btn  arrow-left"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
            </div>
         </section>
         <section id="section9">
            <div className="container">
               <a href="!#">
                  <img src="./img/2023_banner.jpg" alt=""/>
               </a>
            </div>
         </section>
         <section id="section10" className="section-slide-public">
            <div className="title"><h2>지금 가장 핫한 상품 </h2></div>
            <div className="slide-container">
               <div className="slide-view">
                  <ul className="slide-wrap">
                     {/* <!-- li.slide.slide$*20 --> */}
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/hot1.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[밀클레버] 미니붕어빵 5종 (택1)</h2>
                              <h3><strong>25%</strong><em>5,700원~</em></h3>
                              <h4><s>후기 9,999+</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/hot2.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[남향푸드또띠아] 간편 간식 브리또<br/>5종 4개입 (택1)</h2>
                              <h3><em>12,800원</em></h3>                           
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/hot3.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[KF365] 깐 메추리알 800g</h2>
                              <h3><em>8,990원</em></h3>
                              
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/hot4.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[네니아] 교자만두</h2>
                              <h3><strong>7%</strong><em>11,900원</em></h3>
                              <h4><s>12,800</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/hot5.jpeg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[다향오리] 훈제오리 150g</h2>
                              <h3><strong>7%</strong><em>3,245원</em></h3>
                              <h4><s>3,490원</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/hot6.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[피코크] 이천쌀 떡국떡 700g</h2>
                              <h3><strong>7%</strong><em>5,360원</em></h3>
                              <h4><s>5,780원</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/hot7.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[횡성축협한우] 1++ 한우 국거리용 <br/>200g (냉장)</h2>
                              <h3><em>15,900원</em></h3>
                              <h4><s>후기 999+</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/hot8.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[삼성물산] 굴밥용 생굴 200g (냉장) (가열조리용) </h2>
                              <h3><em>6,850원</em></h3>
                              <h4><s>후기 999+</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/hot9.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[타미나] 생과일 뱅쇼 만들기 키트</h2>
                              <h3><em>10,900원</em></h3>
                              <h4><s>후기 338</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/hot10.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[KF365] 1+등급 무항생제 특란 20구</h2>
                              <h3><em>7,300원</em></h3>
                              <h4><s>후기 9,999+</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/hot11.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[피코크] 떡국떡 700g</h2>
                              <h3><strong>7%</strong><em>5,360원</em></h3>
                              <h4><s>5,780원</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/hot12.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[덴마크] 후레쉬 모짜렐라 미니 125g</h2>
                              <h3><em>6,480원</em></h3>
                              <h4><s>후기 999+</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/hot13.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[KF365] 에어프라이어용 통등심 돈까스 120g*5pk</h2>
                              <h3><strong>15%</strong><em>9,900원</em></h3>
                              <h4><s>11,800원</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/hot14.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[미자언니네] 비법을 담은 매생이 옹심이 떡국</h2>
                              <h3><em>12,800원</em></h3>
                              
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/152895850366l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657616036799l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1658112947680l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="!#">
                                 <img src="./img/1657692098340l0.jpg" alt=""/>
                                 <span><img src="./img/cart_fill.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">
                              <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                              <h3><strong>25%</strong><em>36,000원</em></h3>
                              <h4><s>48,000</s></h4>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>

               <a href="!#" className="arrow-btn  arrow-right"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
               <a href="!#" className="arrow-btn  arrow-left"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
            </div>
         </section>
         <section id="section11">
            <div className="container">
               <a href="!#">
                  <img src="./img/wine_banner.jpg" alt=""/>
               </a>
            </div>
         </section>




   </main>
      
         
      
   );
};

