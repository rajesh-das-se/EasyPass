function App() {

  return (
    <>
     <div className="w-screen h-screen">
      <div className="flex justify-center items-center py-3 shadow-lg">
        <h1 className='text-3xl text-black font-mono'>EasyPass</h1> 
      </div>
      <div className="flex justify-center items-center w-full h-full">
       <div className="border-2 p-8">
        <div>
          <input type="text" placeholder="Password" className="text-lg border-2 rounded-lg w-4/5"></input>
          <button className="bg-green-500 px-2 rounded-lg text-white text-lg w-1/5">Copy</button>
        </div>
        <div>
          <input type="range" min={6} max={100}></input>
          <input type="checkbox"></input>
          <label>Numeric Characters</label>
          <input type="checkbox"></input>
          <label>Special Characters</label>
        </div>
       </div>
      </div>
     </div>
    </>
  )
}

export default App
