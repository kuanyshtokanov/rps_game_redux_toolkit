import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectCurrentGame } from '@store/tablesSlice'
import Table from '@components/LobbyTable'
import './index.css'

const Lobby = ({ tables }) => {
  const dispatch = useDispatch();
  
  return (
    tables.tables.map((table,index)=>(
      <Table
        key={index}
        table={table}
        onTableClick={()=>dispatch(selectCurrentGame(index))}
        progress={table.progress}
      />
    ))
  )
}

export default Lobby
