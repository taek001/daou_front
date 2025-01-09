"use client"
import "@/styles/task/disbursement/element/list.css"
import Row from "./element/row"
import {useAppSelector} from "@/redux/hooks";
import { updateDisbitem } from "@/redux/task/disbursement/disbitem-slice";
import { useAppDispatch } from "@/redux/hooks";
export default function List() {
  const disbitem = useAppSelector((state) => state.disbitemReducer.value);
  const dispatch = useAppDispatch();
  const onChangeDisbitem = (idx, key, val) => {
    const temp = {...disbitem[idx], [key]:val};
    dispatch(updateDisbitem({idx: idx, val:temp}));
  }
  return (
    <div className="disbursement list-wrap">
      <table>
          <thead>
            <tr>
              <th width="10%">선택</th>
              <th width="10%">NO</th>
              <th width="10%">항목명</th>
              <th width="10%">권종</th>
              <th width="10%">환율</th>
              <th width="10%">수량</th>
              <th width="10%">단가</th>
              <th width="15%">금액</th>
              <th width="15%">원화 환산 금액</th>
            </tr>
          </thead>
          <tbody>
            {
              disbitem.map((item, idx) => <Row idx={idx} key={idx} disbitem={item} callback={onChangeDisbitem}/>)
            }
          </tbody>
      </table>
    </div>
  );
}