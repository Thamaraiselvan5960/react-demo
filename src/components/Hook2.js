//code for knowing the useEffect dependencies.

// import React,{useState,useEffect} from 'react'

// const Hook2 = () => {

//   const [count, setCount] = useState(0);
//   const [newCount, setNewCount] = useState(0);

//   useEffect(()=>{
//     document.title = `${newCount} new messages`
//   },[newCount]);

//   const handleClick = () => {
//     setCount(count + 1)
//   }
//   const newHandleClick =()=>{
//     setNewCount(newCount+5)
//   }

//   return (
//     <div>
//       <h1>{count} new messages</h1>
//       <button onClick={handleClick}>Increment</button><br/>
//       <h1>{newCount} for useEffect</h1>
//       <button onClick={newHandleClick}>Increment</button>
//     </div>
//   )
// }

// export default Hook2


//code for knowing the cleanup function in using useEffect.

import React ,{useState,useEffect} from 'react'

const Hook2 = () => {

  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log('run useeffect',count);

    return ()=>
    {
      console.log('cleanup useeffect',count);
    }
  },[count])

  return (
    <div>
      <h3>count {count}</h3>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Hook2
