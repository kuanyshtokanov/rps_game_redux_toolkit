import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGame } from '@store/gameSlice'
import './index.css'

const Game = () => {
  const game = useSelector(fetchGame)
  const dispatch = useDispatch()

  console.log('game', game)
  
    return (
        <div>game {game.currentGame}</div>
    )
}

export default Game
