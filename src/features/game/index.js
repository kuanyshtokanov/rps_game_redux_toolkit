import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import GameTable from '@components/GameTable'
import { fetchSelectedHand, stepProgress, selectHand, selectOpponentHand } from '@store/tablesSlice'
import './index.css'

const Game = ({ gameId, progress, hand, bet, opponentHand, status }) => {
  const [value, setValue] = useState(null)
  const dispatch = useDispatch()
  console.log('Game status', status)

  useEffect(() => {
    const getRandomOption = () => {
      return Math.floor(Math.random() * 3);
    }
    if (status === 'finished'){
      const rand = getRandomOption()
      // setValue(rand)
      dispatch(selectOpponentHand({gameId: gameId, hand: rand}))
    }
    // return setValue(null)
  }, [status])

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
  
  const chooseHand = (val) => {
    dispatch(stepProgress(gameId))
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
