import React from "react";
import  TableHeaderItem  from './TableHeader'
import TableRowItems from './TableBody'
import './Table.scss'


const Table = ({ tHeadInfo, tBodyInfo,
 customClassHere, tHeaderCol, rowSpan }) =>
{
  return (
    <table className='chbi-table-component'>
      <thead className='chbi-table-component-header'>
        <tr>
        <th className='chbi-table-component-header-item' colspan='2'>
          {tHeadInfo}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {tHeaderCol.map((x) => (
            <td className='chbi-table-component-data-point'>{x}</td>
          ))}
        </tr>
        {tBodyInfo.map((item) => (
          <tr>{item.weeksOut}
            <td className='chbi-table-component-data-point'>{item.weight}</td></tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;


// TODO 
// Create a ternary for the header to check if the tableHeaderInfo is an array or not 