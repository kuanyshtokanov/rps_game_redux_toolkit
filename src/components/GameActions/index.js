import React, { useState,useEffect } from 'react'
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';

import './index.css'

const options = [
  {
    name: 'paper',
    val: 1,
    comp: FaHandPaper
  },
  {
    name: 'rock',
    val: 2,
    comp: FaHandRock
  },
  {
    name: 'scissors',
    val: 3,
    comp: FaHandScissors
  },
]

const GameActions = ({ gameId, handleChooseHand, hand, status }) => {
  const [isChosen, setIsChosen] = useState(null)
  useEffect(() => {
    setIsChosen(hand)
  }, [hand])

  const handleChooseAction = option => {
    if(status !== 'finished'){
      setIsChosen(option)
      handleChooseHand(option, gameId)
    }
  }

  return (
    <div className="action-icons">
      {options.map((option, idx)=>(
        <option.comp className={isChosen===option.val ? 'icon-selected' : 'icons'} key={idx} onClick={() => handleChooseAction(option.val)}/>
      ))}
    </div>
  )
}

export default GameActions
