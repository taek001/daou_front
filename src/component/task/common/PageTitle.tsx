"use client"
import "@/styles/task/common/PageTitle.css"
import {useAppSelector} from "@/redux/hooks";
export default function SideNav() {
  const pageTitle = useAppSelector((state) => state.pageReducer.value.title);
  return (
    <div className="page-title">{pageTitle}</div>
  );
}