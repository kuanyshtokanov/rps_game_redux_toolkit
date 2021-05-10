import React, { useState, useEffect } from 'react'

const ProgressBar = ({ percent }) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    setValue(percent * 100)
  }, [percent])

  return (
    
      <div className="progress-div" style={{ height:'8px', backgroundColor: 'rgb(233, 233, 233)' }}>
        <div className="progress" style={{ width: `${value}%`, maxWidth: '65vw', height:'8px', backgroundColor: 'rgb(63, 125, 240)' }} />
      </div>
    
  )
}

export default ProgressBar