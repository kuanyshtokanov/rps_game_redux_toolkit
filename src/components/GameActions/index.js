import React, { useState } from 'react'
import {IconContext} from "react-icons";
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';

import Title from '@components/Title'
import './index.css'

const GameActions = ({ game, handleChooseHand }) => {
  // const dispatch = useDispatch();

  console.log('game actions', game)
  
  return (
    <div className="action-icons">
      <IconContext.Provider value={{ className:"icons"}}>
        <FaHandPaper onClick={() => handleChooseHand(1, game.gameId)}/>
        <FaHandRock onClick={() => handleChooseHand(2, game.gameId)}/>
        <FaHandScissors onClick={() => handleChooseHand(3, game.gameId)}/>
      </IconContext.Provider>
    </div>
  )
}

export default GameActions
