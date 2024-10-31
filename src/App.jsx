import { useState, useEffect, useCallback, useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [hasNumericChar, setHasNumericChar] = useState(false)
  const [hasSpecialChar, setHasSpecialChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef=useRef()

  const generatePassword=useCallback(()=>{
    let charStr="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(hasNumericChar) charStr+="1234567890"
    if(hasSpecialChar) charStr+="!@#$%^&*(){}?_-"
    let newPassword=""
    for(let i=0; i<length; i++){
      let index=Math.floor(Math.random()*charStr.length);
      newPassword+=charStr[index];
    }
    setPassword(newPassword);
  }, [length, hasNumericChar, hasSpecialChar])
  useEffect(()=>{generatePassword()}, [length, hasNumericChar, hasSpecialChar])

  const copyHandler=()=>{
    window.navigator.clipboard.writeText(passwordRef.current.value);
  }

  return (
    <>
     <div>

      <div className="flex justify-center items-center py-3 shadow-lg">
        <h1 className='text-3xl text-black font-mono'>EasyPass</h1> 
      </div>

      <div className="flex justify-center items-center h-96">
       <div className="border-2 p-8 shadow-xl">
        <div className="flex py-3 justify-around">
          <input type="text" ref={passwordRef} placeholder="Password" value={password} className="text-lg box-border border-2 rounded-lg w-9/12 px-3"></input>
          <button className="bg-green-500 box-border px-2 rounded-lg text-white text-lg w-2/12 hover:opacity-80" onClick={copyHandler}>Copy</button>
        </div>
        <div className="flex content-center">
          <label htmlFor="length">Length: {length}</label>
          <input type="range" min={8} max={100} id="length" className="mx-1" onChange={(e)=>{setLength(e.target.value)}}></input>
          <input type="checkbox" id="isNumeric" onClick={(e)=>{setHasNumericChar(e.target.checked)}}></input>
          <label htmlFor="isNumeric" className="mx-1">Numeric Characters</label>
          <input type="checkbox" id="isSpecialChar" onClick={(e)=>{setHasSpecialChar(e.target.checked)}}></input>
          <label htmlFor="isSpecialChar" className="mx-1">Special Characters</label>
        </div>
       </div>
      </div>
     </div>
    </>
  )
}

export default App
