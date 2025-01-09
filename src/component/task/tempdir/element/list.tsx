"use client"
import "@/styles/task/tempdir/element/list.css"
export default function List() {

  return (
    <div className="list-wrap">
      <table>
          <thead>
            <tr>
              <th>NO</th>
              <th>부서명</th>
              <th>연도</th>
              <th>분기</th>
              <th>예산금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-left">인사팀</td>
              <td className="text-right">2025</td>
              <td className="text-center">1</td>
              <td className="text-right">1,000,000</td>
            </tr>
          </tbody>
      </table>
    </div>
  );
}