"use client"
import "@/styles/task/alldoc/element/filter.css"
export default function Filter() {

  return (
    <div className="filter-box">
      <div className="filter-item">
        <div className="item-name-box">
          부서명
        </div>
        <div className="item-select-box">
          <select>
            <option>a</option>
            <option>a</option>
            <option>a</option>
          </select>
        </div>
      </div>
      <div className="filter-item">
        <div className="item-name-box">
          연도
        </div>
        <div className="item-select-box">
          <select>
            <option>a</option>
            <option>a</option>
            <option>a</option>
          </select>
        </div>
      </div>
      <div className="filter-item">
        <div className="item-name-box">
          분기
        </div>
        <div className="item-select-box">
          <select>
            <option>a</option>
            <option>a</option>
            <option>a</option>
          </select>
        </div>
      </div>
      <div className="filter-item">
        <div className="item-name-box">
          상태
        </div>
        <div className="item-select-box">
          <select>
            <option>a</option>
            <option>a</option>
            <option>a</option>
          </select>
        </div>
      </div>
      <div className="filter-btn">
        <button>검색</button>
      </div>
    </div>
  );
}
