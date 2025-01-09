"use client"
import Selector from "./element/selector/selector"
import Register from "./element/register"
import List from "./element/list/list"
import Submit from "./element/submit"
import Title from "./element/title"
import {useAppSelector} from "@/redux/hooks";

export default function Disbursement() {
  const selectedBudget = useAppSelector((state) => state.budgetReducer.selected);
  return (
    <div className="disbursement-wrap">
      <Selector/>
      {
        selectedBudget[0] &&
        <div>
          <Title/>
          <Register/>
          <List/>
          <Submit/>
        </div>
      }
      {
        !selectedBudget[0] &&
          <div className="tutorial">
              <p>예산 선택 후 상세 내용 작업 가능합니다</p>
              <p>화면 우측 상단 예산 조회 후 선택을 진행해주세요</p>
          </div>
      }

    </div>
  );
}