import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Title, GameActions, ProgressBar, ScoreInfo} from 'react-rps-components'

import { stepProgress, selectOpponentHand } from '@store/tablesSlice'
import './index.css'

const Table = ({ gameId, onTableClick, onChooseHand }) => {
  const [timer, setTimer] = useState(0)
  const dispatch = useDispatch()

  const { progress, hand, status, bet, winAmount } = useSelector(
    ({tables}) => {
      return ({
        progress: tables.tables[gameId]?tables.tables[gameId].progress: undefined,
        hand: tables.tables[gameId]?tables.tables[gameId].selectedHand: undefined,
        status: tables.tables[gameId]? tables.tables[gameId].status: undefined,
        bet: tables.tables[gameId]? tables.tables[gameId].bet: 0,
        winAmount: tables.tables[gameId]? tables.tables[gameId].winAmount: 0
      })
    }
  )

  useEffect(() => {
    const getRandomOption = () => {
      return Math.floor(Math.random() * 3) + 1
    }
    if (status === 'finished'){
      const rand = getRandomOption()
      dispatch(selectOpponentHand({gameId: gameId, hand: rand}))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  const handleIconClick = (val, gameId) => {
    onChooseHand(gameId, val)
  }

  useEffect(() => {
    const startTimer = () => {
      if (timer === 0 && progress < 10) {
        setTimer(setInterval(()=>countDown(), 1000))
      }
    }

    if (status === 'started'){
      startTimer()
    }
    if(progress === 10) {
      clearInterval(timer)
      setTimer(0)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, progress])

  const countDown = () => {
    if (progress < 10) {
      dispatch(stepProgress(gameId))
    } else {
      clearInterval(timer)
    }
  }
  
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-header__left">
          <Title
            title={`table #${gameId}`}
          />
        </div>
        <div className="table-header__right">
          <ScoreInfo label={'BET'} value={bet}/>
          <div className="table-stats">
            <span className="bets-label">
              WIN
            </span>
            <span className="bets-val">
              {winAmount}
            </span>
          </div>
        </div>
      </div>
      <div className="table-countdown">
        <ProgressBar
          percent={progress}
        />
      </div>
      <div className="table-content">
        <div className="table-content__top">
          <button
            onClick={onTableClick}
          >
            Join
          </button>
        </div>
        <GameActions
          gameId={gameId}
          handleChooseHand={handleIconClick}
          hand={hand}
          status={status}
        />
      </div>
    </div>
  )
}

export default Table
