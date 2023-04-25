import React from "react";
import  TableHeaderItem  from './TableHeader'
import TableRowItems from './TableBody'
import './Table.scss'


const Table = ({ tHeadInfo, tBodyInfo, customClassHere, rowSpan }) => {
  console.log(tBodyInfo);
  return (
    <table className={customClassHere}>
      <thead className='chbi-table-component-header'>
        <tr>
        <th className='chbi-table-component-header-item' colspan='2'>
          {tHeadInfo}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>Testing</p>
          </td>
          <td>
            <p>Testing</p>
          </td>
        </tr>
        <tr>
          <td><p>Test2</p></td>
        </tr>

      </tbody>
      <tbody>
        {/* {tBodyInfo.map((item) => {
          return <TableRowItems key={item?.id} data={item?.items} />
        })} */}
      </tbody>
    </table>
  )
}

export default Table;


// TODO 
// Create a ternary for the header to check if the tableHeaderInfo is an array or not 