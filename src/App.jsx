import { useState, useEffect, useCallback } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [hasNumericChar, setHasNumericChar] = useState(false)
  const [hasSpecialChar, setHasSpecialChar] = useState(false)
  const [password, setPassword] = useState("")

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

  return (
    <>
     <div className="w-screen h-screen">

      <div className="flex justify-center items-center py-3 shadow-lg">
        <h1 className='text-3xl text-black font-mono'>EasyPass</h1> 
      </div>

      <div className="flex justify-center items-center w-full h-full">
       <div className="border-2 p-8 shadow-xl">
        <div className="flex py-3">
          <input type="text" placeholder="Password" value={password} className="text-lg box-border border-2 rounded-lg mr-3 w-96 px-3"></input>
          <button className="bg-green-500 box-border px-2 rounded-lg text-white text-lg w-24">Copy</button>
        </div>
        <div className="flex content-center">
          <label htmlFor="length">Length: {length}</label>
          <input type="range" min={8} max={100} id="length" className="mx-1" onClick={(e)=>{setLength(e.target.value)}}></input>
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
