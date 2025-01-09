"use client"
import "@/styles/task/budget/element/list.css"
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {setBudge} from "@/redux/task/budget/budget-slice";
import {deleteBudget} from "@/util/task/budget/BudgetUtil"
export default function List(props) {
  const dispatch = useAppDispatch();

  const requestDelete = (seq) => {
    deleteBudget(seq,(e)=>dispatch(setBudge(e)))
  }

  const numberFormat = (num) => {
    if(!num) return 0;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <tr>
      <td className="text-center">{props.row.seq}</td>
      <td className="text-left">{props.row.deptN}</td>
      <td className="text-right">{props.row.year}</td>
      <td className="text-center">{props.row.quarter}</td>
      <td className="text-right">{numberFormat(props.row.amt)}</td>
      <td className="text-right">{numberFormat(props.row.spentAmt)}</td>
      <td className="text-right">{numberFormat(props.row.remainingAmt)}</td>
      <td className="text-right">
        <button onClick={() => requestDelete(props.row.seq)}>
          삭제
        </button>
      </td>
    </tr>
  );
}