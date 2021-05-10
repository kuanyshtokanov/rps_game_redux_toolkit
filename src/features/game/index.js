import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Table from '@components/GameTable'
import { fetchGame, stepProgress } from '@store/tablesSlice'
import './index.css'

const Game = ({ game, progress }) => {
  const dispatch = useDispatch()

  let timer = 0

  // const countDown = () => {
  //   // Remove one second, set state so a re-render happens.
  //   let seconds = this.state.seconds - 1;
  //   this.setState({
  //     time: this.secondsToTime(seconds),
  //     seconds: seconds,
  //   })
    
  //   // Check if we're at zero.
  //   if (seconds === 0) { 
  //     clearInterval(this.timer)
  //   }
  // }

  // const startTimer = () => {
  //   if (timer === 0 && this.state.seconds > 0) {
  //     timer = setInterval(countDown, 1000)
  //   }
  // }
  

  const chooseHand = () => {
    dispatch(stepProgress(0.1))
  }
  
  return (
    (game && game.gameId !== null) ? (
      <Table
        table={game}
        onChooseHand={chooseHand}
        progress={progress}
      />
    )
    : null
  )
}

export default Game
