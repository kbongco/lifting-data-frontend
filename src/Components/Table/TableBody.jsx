import React from "react";

const TableRowItems = ({ data }) => {
  return (
    <tr>
      {data.map((item) => {
        return <td key={item}>{item}</td>
      })}
    </tr>

  )
}



export default TableRowItems;