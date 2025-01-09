"use client"
import "@/styles/task/disbursement/element/register.css"
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {pushDisbitem,setDisbitem} from "@/redux/task/disbursement/disbitem-slice";
import {useRouter} from "next/navigation";

export default function Rgister() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const disbitem = useAppSelector((state) => state.disbitemReducer.value);
  const onChangeDisbitem = () => {
    const tempDisbitem = [...disbitem];
    for(let i=disbitem.length-1; i>=0; i--){
      if(disbitem[i].needDelete) tempDisbitem.splice(i,1);
    }
    if(tempDisbitem.length === disbitem.length){
      alert('선택 된 항목이 없습니다');
      return;
    }
    dispatch(setDisbitem(tempDisbitem));
    router.refresh();
  }

  return (
    <div>
      <div className="button-box">
        <button onClick={()=> dispatch(pushDisbitem())}>추가</button>
        <button onClick={onChangeDisbitem}>삭제</button>
      </div>
    </div>
  );
}