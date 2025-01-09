"use client"
import Filter from "./element/filter"
import Register from "./element/register/register"
import List from "./element/list/list"
import { useEffect } from "react";

import { pushBudget, setBudge } from "@/redux/task/budget/budget-slice";
import { useAppDispatch } from "@/redux/hooks";
import { getBudgetList } from "@/util/task/budget/BudgetUtil"
export default function Budget() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getBudgetList((e)=>{dispatch(setBudge(e))})
  }, []);

  return (
    <div className="budget-wrap">
      <Filter/>
      <Register/>
      <List/>
    </div>
  );
}