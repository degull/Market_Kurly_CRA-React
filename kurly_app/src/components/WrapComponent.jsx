/* rsc */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent'
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import IntroModalComponent from './wrap/IntroModalComponent';
import QuickMenuComponent from './wrap/QuickMenuComponent';
import GoTopComponent from './wrap/GoTopComponent';
import Main1Component from './wrap/sub_page/Main1Component';
import SignUpComponent from './wrap/sub_page/SignUpComponent';


export default function WrapComponent(){
   return (
      <div id = "wrap">
      
         <TopModalComponent/>

         <BrowserRouter>
            <Routes>
               <Route path='/' element={<HeaderComponent/>}>
                  <Route index element={<MainComponent/>}></Route>
                  <Route path='신상품' element={<Main1Component/>}></Route>
                  <Route path='회원가입' element={<SignUpComponent/>}></Route>
               </Route>
            </Routes>
         </BrowserRouter>
       
         <FooterComponent/>
         <IntroModalComponent/>
         <QuickMenuComponent/>
         <GoTopComponent/>
         

      </div>
   );
};

