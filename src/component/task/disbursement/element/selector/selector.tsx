"use client"
import "@/styles/task/disbursement/element/filter/filter.css"
import Search from "./element/search/search"
import {useAppSelector} from "@/redux/hooks";
export default function Selector() {
  const selectedBudget = useAppSelector((state) => state.budgetReducer.selected);
  const budget = () => {
    if(selectedBudget[0] == null) return {};
    return selectedBudget[0];
  }

  return (
    <div>
      <Search/>
      <div className="filter-box">
        <div className="filter-item">
          <div className="item-name-box">
            부서명
          </div>
          <div className="item-select-box">
            {budget().deptN}
          </div>
        </div>
        <div className="filter-item">
          <div className="item-name-box">
            연도
          </div>
          <div className="item-select-box">
            {budget().year}
          </div>
        </div>
        <div className="filter-item">
          <div className="item-name-box">
            분기
          </div>
          <div className="item-select-box">
            {budget().quarter}
          </div>
        </div>
        <div className="filter-item">
          <div className="item-name-box">
            잔여예산
          </div>
          <div className="item-select-box">
            {budget().remainingAmt}
          </div>
        </div>
      </div>
    </div>
  );
}
