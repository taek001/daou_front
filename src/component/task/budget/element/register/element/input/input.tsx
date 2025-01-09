"use client"
import Input from "@/component/task/budget/element/register/element/input/element/elementInput"
import Title from "@/component/common/side-nav/element/title";
import {useRef, useImperativeHandle} from "react";
export default function input(props) {
  const nullif = (obj) => obj ? obj : null;
  const dynamicRefs = useRef([]);
  useImperativeHandle(props.ref, () => ({
    valid
  }));
  const valid = () => {
    let isValid = true;
    dynamicRefs.current.forEach((item, idx) => {
      if(!item.current.isValid()) isValid = false;
    })
    return isValid;
  }

  const getInput = (input, idx) => {
    const inputRef = useRef<string[]>([]);
    dynamicRefs.current.push(inputRef);
    return (<Input
      name = {nullif(input.name)}
      column = {nullif(input.column)}
      required = {nullif(input.required)}
      maxLength = {nullif(input.maxLength)}
      maxValue = {nullif(input.maxValue)}
      dataType = {nullif(input.dataType)}
      format = {nullif(input.format)}
      setData={props.setData}
      data={props.data}
      key={idx}
      ref={inputRef}
    />)
  }

  return (
    <div>
      {
        props.inputList &&
        props.inputList.map(
          (input, idx) => getInput(input, idx)
        )
      }
    </div>
  );
}