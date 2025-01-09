"use client"
import "@/styles/task/tempdir/element/register.css"
import {useState} from "react";
export default function Delete() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div>
      <div className="divider"/>
      <div className="register-box">
        <div className="button-box">
          <button onClick={()=> setDialogOpen(true)}>삭제</button>
        </div>
      </div>
    </div>
  );
}