"use client"
import "@/styles/task/budget/element/filter.css"
import {useEffect, useRef, useState} from "react";
import {useAppSelector} from "@/redux/hooks";
import { setFilteredBudge, BudgetState } from "@/redux/task/budget/budget-slice";
import { useAppDispatch } from "@/redux/hooks";
export default function Filter() {
  const dispatch = useAppDispatch();
  const budgetList = useAppSelector((state) => state.budgetReducer.origin);
  const [tempBudgetList, setTempBudgetList] = useState([]);
  const [deptN, setDeptN] = useState([]);
  const [selectedDeptN, setSelectedDeptN] = useState('');
  const [year, setYear] = useState([]);
  const [selectedYear, setSelectedYear] = useState();
  const [quarter, setQuarter] = useState([]);
  const [selectedQuarter, setSelectedQuarter] = useState();
  let deptNRef = useRef<HTMLOptionElement>(null as HTMLOptionElement);

  useEffect(() => {
    budgetList.forEach((item)=>{
      if(item.deptN != null) deptN.push(item.deptN);
      setDeptN([...deptN]);
    });
    setTempBudgetList([...budgetList]);
    setDeptN([...new Set(deptN)])
    setSelectedDeptN('-');
    deptNRef.current.selected = true;
  }, [budgetList]);

  useEffect(() => {
    tempBudgetList.splice(0, tempBudgetList.length);
    year.splice(0, year.length);
    budgetList.forEach((item, idx)=>{
      if(selectedDeptN !== '-' && selectedDeptN !==item.deptN) return;

      tempBudgetList.push(item);
      setTempBudgetList([...tempBudgetList]);
      if(selectedDeptN === '-') return;

      year.push(item.year);
      setYear([year]);
    })
    setYear([...new Set(year)])
  }, [selectedDeptN]);

  useEffect(() => {
    tempBudgetList.splice(0, tempBudgetList.length);
    quarter.splice(0, quarter.length);
    budgetList.forEach((item, idx)=>{
      if(selectedDeptN !== '-' && selectedDeptN !==item.deptN) return;
      if(selectedYear !== '-' && selectedYear !==item.year.toString()) return;

      tempBudgetList.push(item);
      setTempBudgetList([...tempBudgetList]);
      if(selectedYear === '-') return;

      quarter.push(item.quarter.toString());
      setQuarter([quarter]);
    })
    setQuarter([...new Set(quarter)])
  }, [selectedYear]);

  useEffect(() => {
    tempBudgetList.splice(0, tempBudgetList.length);
    budgetList.forEach((item, idx)=>{
      if(selectedDeptN !== '-' && selectedDeptN !==item.deptN) return;
      if(selectedYear !== '-' && selectedYear !==item.year.toString()) return;
      if(selectedQuarter !== '-' && selectedQuarter !==item.quarter.toString()) return;
      tempBudgetList.push(item);
      setTempBudgetList([...tempBudgetList]);
    })
  }, [selectedQuarter]);

  const deptSelect = (e) => {
    setSelectedDeptN(e.target.value);
  }

  const yearSelect = (e) => {
    setSelectedYear(e.target.value);
  }

  const quarterSelect = (e) => {
    setSelectedQuarter(e.target.value);
  }

  const doFilter = () => {
    dispatch(setFilteredBudge(tempBudgetList));
  }

  return (
    <div className="filter-box">
      <div className="filter-item">
        <div className="item-name-box">
          부서명
        </div>
        <div className="item-select-box">
          <select onChange={deptSelect} multiple={false}>
            <option ref={deptNRef}>-</option>
            {
              deptN.map((name, idx)=><option key={`deptN${idx}`} value={name}>{name}</option>)
            }
          </select>
        </div>
      </div>
      <div className="filter-item">
        <div className="item-name-box">
          연도
        </div>
        <div className="item-select-box">
          <select onChange={yearSelect} multiple={false}>
            <option value={'-'}>-</option>
            {
              year.map((name, idx)=><option key={`year${idx}`} value={name}>{name}</option>)
            }
          </select>
        </div>
      </div>
      <div className="filter-item">
        <div className="item-name-box">
          분기
        </div>
        <div className="item-select-box">
          <select onChange={quarterSelect} multiple={false}>
            <option>-</option>
            {
              quarter.map((name, idx)=><option key={`quarter${idx}`} value={name}>{name}</option>)
            }
          </select>
        </div>
      </div>
      <div className="filter-btn">
        <button onClick={doFilter}>검색</button>
      </div>
    </div>
  );
}
