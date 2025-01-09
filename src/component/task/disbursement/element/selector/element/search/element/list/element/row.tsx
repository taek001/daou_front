"use client"
import "@/styles/task/budget/element/list.css"
import {useAppDispatch} from "@/redux/hooks";
import {setSelected} from "@/redux/task/budget/budget-slice";

export default function List(props) {
  const dispatch = useAppDispatch();

  const selectBudget = () => {
    dispatch(setSelected([{...props.row}]));
    props.close();
  }

  const numberFormat = (num) => {
    if(!num) return 0;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <tr>
      <td className="text-left">{props.row.deptN}</td>
      <td className="text-right">{props.row.year}</td>
      <td className="text-center">{props.row.quarter}</td>
      <td className="text-right">{numberFormat(props.row.remainingAmt)}</td>
      <td className="text-right">
        <button onClick={() => selectBudget()}>
          선택
        </button>
      </td>
    </tr>
  );
}