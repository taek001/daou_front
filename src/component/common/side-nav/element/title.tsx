"use client"

import "@/styles/common/side-nav/element/item.css"
import Item from "@/component/common/side-nav/element/item";


export default function Title(props) {
    return (
        <ul>
          <div className="title">{props.title.title}</div>
          {
            props.title.MenuList.map((menu, idx) => <Item menu={menu} key={idx}/>)
          }
        </ul>
    );
}