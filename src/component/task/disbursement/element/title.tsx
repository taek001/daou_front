"use client"
import "@/styles/task/disbursement/element/title.css"
export default function Title() {
  return (
    <div>
      <div className="divider"/>

      <div className="title-box">
        <div className="title-box-title">제목</div>
        <input type="text" placeholder="제목을 입력 하세요"/>
      </div>
    </div>
  );
}