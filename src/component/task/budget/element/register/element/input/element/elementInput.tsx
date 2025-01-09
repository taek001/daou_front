"use client"

import {useEffect, useImperativeHandle, useState} from "react";

export default function input(props) {
  const [value, setValue] = useState(props.dataType === 'number' ? '0' : '');
  const [error, setError] = useState(false);
  const [initPage, setInitPage] = useState(false);

  useImperativeHandle(props.ref, () => ({
    isValid
  }));

  useEffect(() => {
    if(!initPage) {
      setInitPage(true);
      return;
    }
    isValid();
  }, [value]);

  const isEmpty = () => {
    if(!props.required) return;
    setError(false);
    if(props.dataType === 'number'){
      if(value === '0') setError(true);
    } else {
      if (value == null || value === '') setError(true);
    }
  }

  const isValid = () => {
    isEmpty();
    if(!props.required) return true;
    if(props.dataType === 'number'){
      if(value === '0') return false;
    } else {
      if (value == null || value === '') return false;
    }
    return true;
  }

  const inputChange = (e) => {
    if(props.dataType === 'number') {
      let val = e.target.value;
      if(val.trim() === ''){
        setValue('0');
        props.setData({...props.data, [props.column] : 0});
        return;
      }
      val = Number(val.toString().replace(/[^0-9]/g, ""));
      if(props.maxValue != null && val > props.maxValue) val = props.maxValue;
      props.setData({...props.data, [props.column] : val});
      if(!props.format) setValue(val);
      else setValue(val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }else{
      setValue(e.target.value);
      props.setData({...props.data, [props.column] : e.target.value});
    }
  }

  return (
    <div className={`item-box ${error ? 'error' : ''}`}>
      <div className="item-name-box">
        <span className="required">*</span>
        <span>{props.name}</span>
      </div>
      <div className="item-input-box">
        <input type="text" onBlur={isEmpty} onChange={inputChange} value={value} maxLength={props.maxLength} max={props.maxValue}/>
      </div>
    </div>
  );
}