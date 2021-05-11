import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectCurrentGame, stepProgress, selectHand, chooseBet } from '@store/tablesSlice'
// import { chooseBet } from '@store/betsSlice'
import LobbyTable from '@components/LobbyTable'
import Chips from '@components/Chips'
import './index.css'

const Lobby = ({ tables }) => {
  const dispatch = useDispatch();

  const chooseHand = (gameId, hand) => {
    console.log('gameId', gameId)
    console.log('hand', hand)
    dispatch(stepProgress(gameId))
    dispatch(selectHand({gameId: gameId, hand: hand}))
  }

  const handleChooseBet = val => {
    dispatch(chooseBet(val))
    // dispatch(startGame())
  }
  
  return (
    <div className="lobby">
      <div>
        {tables.tables.map((table,index)=>(
          <LobbyTable
            key={index}
            table={table}
            onTableClick={()=>dispatch(selectCurrentGame(index))}
            onChooseHand={chooseHand}
            progress={table.progress}
            bet={table.bet}
          />
        ))}
      </div>
      <div className="lobby-chips">
        <Chips
          handleChooseBet={handleChooseBet}
        />
      </div>
    </div>
  )
}

export default Lobby
