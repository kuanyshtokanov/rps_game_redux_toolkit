import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentGame } from '@store/gameSlice'
import './index.css'

const Lobby = ({ tables }) => {
  const dispatch = useDispatch();

  console.log('lobby tables', tables)
  
  return (
    tables.map((table,index)=>(
      <div key={index}>
        table #{index+1}
        <button
          onClick={() => dispatch(selectCurrentGame({currentGame:index, game: table}))}
        >
          Join
        </button>  
      </div>
      
    ))
  )
}

export default Lobby
