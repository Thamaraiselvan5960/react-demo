import React, { useState } from 'react'

const Hook1 = () => {

  const [details, setDetails] = useState({count:0,type:""});
const increaseCounter = ()=>{
  setDetails((prev)=>({
    ...prev,
    count:prev.count+1,
    }))

  }
  console.log(details)

  return (
    <div>
      <input type='text' onChange={(e)=> e.target.value}/>
      <h1> {details.type} has clicked {details.count}times !!</h1>
      <button onClick={increaseCounter}>Increase Count</button>
    </div>
  )
}

export default Hook1
