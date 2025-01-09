"use client"
import "@/styles/task/budget/element/list.css"
import {useAppSelector} from "@/redux/hooks";
import Row from "./element/row"
import {setBudge} from "@/redux/task/budget/budget-slice";
export default function List() {
  const budgetList = useAppSelector((state) => state.budgetReducer.value);

  return (
    <div className="budget list-wrap">
      <table>
          <thead>
            <tr>
              <th>NO</th>
              <th>부서명</th>
              <th>연도</th>
              <th>분기</th>
              <th>예산금액</th>
              <th>사용금액</th>
              <th>잔여금액</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              budgetList.map((row, idx)=> <Row row={row} key={idx} idx={idx}/>)
            }
          </tbody>
      </table>
    </div>
  );
}