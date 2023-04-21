import React from "react";
import  TableHeaderItem  from './TableHeader'
import TableRowItems from './TableBody'
import './Table.scss'


const Table = ({ tHeadInfo, tBodyInfo, customClassHere }) => {
  console.log(tBodyInfo);
  return (
    <table className={customClassHere}>
      <thead className='chbi-table-component-header'>
        <th className='chbi-table-component-header-item'>
          {tHeadInfo}
        </th>
      </thead>
      <tbody>
        <tr>
          <p>'Just testing'</p>
        </tr>
        <tr><p>
        Another test</p></tr>

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