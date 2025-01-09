"use client"
import "@/styles/task/alldoc/element/register.css"
import { IoMdClose } from "react-icons/io";
import {useState} from "react";
export default function Submit() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div>
      <div className="divider"/>
      <div className="register-box">
        <div className="button-box">
          <button onClick={()=> setDialogOpen(true)}>전송</button>
        </div>
      </div>
    </div>
  );
}