"use client"
import "@/styles/task/budget/element/register.css"
import Input from "@/component/task/budget/element/register/element/input/input"
import { IoMdClose } from "react-icons/io";
import {Component, useEffect, useRef, useState} from "react";
import {setDept, setBudge} from "@/redux/task/budget/budget-slice";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {createBudget, deleteBudget, getDeptList} from "@/util/task/budget/BudgetUtil"
export default function Register() {
  const dispatch = useAppDispatch();
  const deptList = useAppSelector((state) => state.budgetReducer.dept);
  const [dialogOpen, setDialogOpen] = useState(false);
  const inputRef = useRef(Input("AA"));
  const [budget, setBudget] = useState({
    departmentSeq: '',
    year: 0,
    quarter: 0,
    amt: 0
  });

  useEffect(() => {
    getDeptList((e)=>{
      dispatch(setDept(e));
    });
  }, []);

  useEffect(() => {
    setBudget({
      departmentSeq: deptList[0].seq,
      year: 0,
      quarter: 0,
      amt: 0
    })
  }, [dialogOpen]);

  const submit = () => {
    if(!inputRef.current.valid()){
      alert('필수 항목 미입력');
      return;
    }

    createBudget(budget,(e)=>{
      dispatch(setBudge(e));
      setDialogOpen(false);
    });
  }

  const updateDeptSeq = (e) => {
    setBudget({...budget, departmentSeq: e.target.value})
  }

  const inputList = [
    // {
    //   dataType: 'number',
    //   name: '부서명',
    //   column: 'departmentSeq',
    //   required: true,
    // },
    {
      dataType: 'number',
      name: '기준연도',
      column: 'year',
      required: true,
      maxLength: 4,

    },
    {
      dataType: 'number',
      name: '분기',
      column: 'quarter',
      required: true,
      maxValue: 4,
    },
    {
      dataType: 'number',
      name: '예산금액',
      column: 'amt',
      required: true,
      maxLength: 20,
      format: true
    }
  ]

  return (
    <div>
      <div className="divider"/>
      <div className="register-box">
        <div className="button-box">
          <button onClick={()=> setDialogOpen(true)}>등록</button>
        </div>
      </div>
      {dialogOpen &&<div>
          <div className="dialog-background-wrap" onClick={()=> setDialogOpen(false)}/>
          <div className="dialog-wrap">
              <div className="dialog-header">
                  부서예산 등록 팝업
                  <a className="close-btn" onClick={()=> setDialogOpen(false)}>
                      <IoMdClose/>
                  </a>
              </div>
              <div className="dialog-body">
                  <div className="item-box">
                      <div className="item-name-box">
                          <span>부서명</span>
                      </div>
                      <div className="item-input-box">
                          <select onChange={updateDeptSeq}>
                            {
                              deptList.map((item, idx)=> <option value={item.seq} key={idx}>{item.name}</option>)
                            }
                          </select>
                      </div>
                  </div>

                  <Input
                      inputList={inputList}
                      setData={setBudget}
                      data={budget}
                      ref={inputRef}
                  />
                  <div className="submit-box">
                      <button className="submit" onClick={submit}>등록</button>
                  </div>
              </div>
          </div>
      </div>}
    </div>
  );
}