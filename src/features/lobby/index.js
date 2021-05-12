import React from 'react'
import { useDispatch } from 'react-redux'

import { selectCurrentGame, selectHand, chooseBet } from '@store/tablesSlice'
import LobbyTable from '@components/LobbyTable'
import Chips from '@components/Chips'
import './index.css'

const Lobby = ({ tables }) => {
  const dispatch = useDispatch();

  const chooseHand = (gameId, hand) => {
    dispatch(selectHand({gameId: gameId, hand: hand}))
  }

  const handleChooseBet = val => {
    dispatch(chooseBet(val))
  }
  
  return (
    <div className="lobby">
      <div>
        {tables.tables.map((table,index)=>(
          <LobbyTable
            key={index}
            gameId={table.gameId}
            onTableClick={()=>dispatch(selectCurrentGame(index))}
            onChooseHand={chooseHand}
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
