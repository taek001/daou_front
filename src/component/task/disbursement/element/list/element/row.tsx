"use client"
import {useEffect} from "react";
import {useRef} from "react";

export default function List(props) {
  const onItemUpdate = (key, e) => {
    props.callback(props.idx, key ,e.target[e.target.type === 'checkbox' ? 'checked' : 'value']);
  }

  return (
    <tr>
      <td className="text-center">
        <input type="checkbox" onChange={(e) => onItemUpdate ('needDelete', e)} checked={props.disbitem.needDelete}/>
      </td>
      <td className="text-center">{props.idx + 1}</td>
      <td>
        <input type="text" value={props.disbitem.name} onChange={(e) => onItemUpdate ('name', e)}/>
      </td>
      <td className="text-right">
        <select value={props.disbitem.currencyType} onChange={(e) => onItemUpdate ('currencyType', e)}>
          <option value="KRW">원화</option>
          <option value="DOLLAR">달러</option>
          <option value="ENHWA">엔화</option>
        </select>
      </td>
      <td className="text-center">
        환율
      </td>
      <td className="text-right">
        <input type="text" onChange={(e) => onItemUpdate ('quantity', e)}/>
      </td>
      <td className="text-right">
        <input type="text" onChange={(e) => onItemUpdate ('unitPrice', e)}/>
      </td>
      <td className="text-right">{(props.disbitem.quantity * props.disbitem.unitPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
      <td className="text-right">{(props.disbitem.quantity * props.disbitem.unitPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
    </tr>
  );
}