import React, { useState, useEffect } from 'react'
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa'

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

const OpponentHand = ({ hand }) => {
  const [option, setOption] = useState(null)

  useEffect(() => {
    setOption(options.find((option, idx)=>option.val===hand))
  }, [hand])

  return (
    <div className="computer-response">
      {option && option.comp && (
        <>
        <span>
          Computer:
        </span>
        <div className="computer-option">
          <option.comp className='response-icon'/>
        </div>
        </>
      )}
    </div>
  )
}

export default OpponentHand