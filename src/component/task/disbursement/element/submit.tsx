"use client"
import "@/styles/task/disbursement/element/submit.css"
import { IoMdClose } from "react-icons/io";
import {useState} from "react";
export default function Submit() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div>
      <div className="divider"/>
      <div className="submit-box">
        <button onClick={()=> setDialogOpen(true)}>임시저장</button>
        <button onClick={()=> setDialogOpen(true)}>등록</button>
      </div>
    </div>
  );
}