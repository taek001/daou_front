"use client"
import Delete from "./element/delete"
import List from "./element/list"
export default function Tempdir() {

  return (
    <div className="tempdir-wrap">
      <Delete/>
      <List/>
    </div>
  );
}