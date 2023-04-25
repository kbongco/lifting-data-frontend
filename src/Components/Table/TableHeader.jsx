import React from "react";

const TableHeaderItem = ({ item }) => {
  return (
    <td title={item}>
      {item}
    </td>
  );
}

export default TableHeaderItem;