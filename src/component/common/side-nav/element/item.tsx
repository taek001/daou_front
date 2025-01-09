"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link";
import "@/styles/common/side-nav/element/item.css"
import { BiTask } from "react-icons/bi";
import { setPage } from "@/redux/common/page-slice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";

export default function Item(props) {
  const dispatch = useAppDispatch();
  const pathName = usePathname();
  useEffect(() => {
    if(pathName === props.menu.path)
      dispatch(setPage(props.menu));
  }, [pathName]);

  const getItemClass = () => {
    if(pathName === props.menu.path)
      return 'active'
    else
      return ''
  }

    return (
      <Link href={props.menu.path}>
        <li className={getItemClass()}>
          <BiTask/>
          {props.menu.title}
        </li>
      </Link>
    );
}