"use client"
import Filter from "./element/filter"
import Submit from "./element/submit"
import List from "./element/list"
export default function Alldoc() {

  return (
    <div className="alldoc-wrap">
      <Filter/>
      <Submit/>
      <List/>
    </div>
  );
}