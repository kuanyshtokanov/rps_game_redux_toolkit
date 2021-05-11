import React, { useState, useEffect } from 'react'

const ProgressBar = ({ percent, status }) => {
  const [value, setValue] = useState(0)

  // console.log('ProgressBar', percent)
  // console.log('ProgressBar', status)

  useEffect(() => {
    setValue(percent * 10)
  }, [percent])

//   useEffect(() => {
//     console.log("useEffect")
//     const interval = setInterval(function () {
//         setCount(count + 1);
//     }, 1000);
//     // return optional function for cleanup
//     // in this case, this cleanup fn is called every time count changes
//     return () => {
//         console.log("cleanup");
//         clearInterval(interval);
//     }
// }, [count]);

  return (
    <div className="progress-div" style={{ height:'8px', backgroundColor: 'rgb(233, 233, 233)' }}>
      <div className="progress" style={{ width: `${value}%`, maxWidth: '100%', height:'8px', backgroundColor: 'rgb(63, 125, 240)' }} />
    </div>
  )
}

export default ProgressBar