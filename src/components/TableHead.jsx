import React from 'react'

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th></th>
        <th id='time'>TIME</th>
        <th id='destinations'>DESTINATION</th>
        <th id='flights'>FLIGHT</th>
        <th id='gates'>GATE</th>
        <th id='remarks'>REMARK</th>
      </tr>
    </thead>
  )
}

export default TableHead;