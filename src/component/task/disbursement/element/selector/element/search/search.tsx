"use client"
import "@/styles/task/disbursement/element/filter/element/search.css"
import {IoMdClose} from "react-icons/io";
import { useState} from "react";
import List from "./element/list/list"
import { setOriginBudge } from "@/redux/task/budget/budget-slice";
import { useAppDispatch } from "@/redux/hooks";
import { getBudgetList } from "@/util/task/budget/BudgetUtil"
export default function Selector() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const dispatch = useAppDispatch();
  const openSearchDialog = () => {
    getBudgetList((e)=>{
      dispatch(setOriginBudge(e));
      setDialogOpen(true);
    })

  }
  return (
    <div className="dept-search-wrap">
      <div className="search-button-box">
        <button onClick={openSearchDialog}>예산 조회</button>
      </div>
      {dialogOpen &&
          <div>
              <div className="dialog-background-wrap" onClick={()=> setDialogOpen(false)}/>
              <div className="dialog-wrap">
                  <div className="dialog-header">
                      부서예산 조회
                      <a className="close-btn" onClick={()=> setDialogOpen(false)}>
                          <IoMdClose/>
                      </a>
                  </div>
                  <div className="dialog-body">
                      <List close={()=>setDialogOpen(false)}/>
                  </div>
              </div>
          </div>
      }
    </div>
  );
}
