"use client"

import Title from './element/title'
import {MenuList} from "@/constants/common/side-nav/MenuList";
import "@/styles/common/side-nav/SideNav.css"
import ReduxProvider from "@/redux/provider";

export default function SideNav() {
  return (
    <ReduxProvider>
      <div className="side-nav-box">
        <img src="https://daou.co.kr/export/sites/daou/images/logo.jpg"/>
          {
            MenuList.map((title, idx) => <Title title={title} key={idx}/>)
          }
      </div>
    </ReduxProvider>
  );
}