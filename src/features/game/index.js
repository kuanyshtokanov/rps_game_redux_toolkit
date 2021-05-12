import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import GameTable from '@components/GameTable'
import { selectHand } from '@store/tablesSlice'
import './index.css'

const Game = ({ gameId }) => {
  const dispatch = useDispatch()

  const { progress, hand, opponentHand, status, bet } = useSelector(
    ({tables}) => {
      return ({
        progress: tables.tables[gameId]?tables.tables[gameId].progress: undefined,
        hand: tables.tables[gameId]?tables.tables[gameId].selectedHand: undefined,
        opponentHand: tables.tables[gameId]?tables.tables[gameId].opponentHand: undefined,
        status: tables.tables[gameId]? tables.tables[gameId].status: undefined,
        bet: tables.tables[gameId]? tables.tables[gameId].bet: 0,
      })
    }
  )
  
  const chooseHand = (val) => {
    dispatch(selectHand({gameId: gameId, hand: val}))
  }

  return (
    (gameId !== null) ? (
      <GameTable
        gameId={gameId}
        onChooseHand={chooseHand}
        progress={progress}
        bet={bet}
        hand={hand}
        opponentHand={opponentHand}
        status={status}
      />
    )
    : null
  )
}

export default Game
