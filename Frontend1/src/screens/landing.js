import React from 'react'
import chessBoard from "../assets/chess-board.jpg"
import {useNavigate} from "react-router-dom"

function Landing() {
    const navigate = useNavigate();
  return (
<div className='pt-8 pl-8'>  
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
    <div className='flex items-center justify-center'>
<img className='max-w-96' src={chessBoard} alt='chess-board-image'/>
    </div>
    <div className='flex  flex-col gap-2 items-center justify-center'>
        <div className='text-white'>Play Onlin Chess</div>
        <button onClick={()=>
        {
            navigate("/game")
        }} className='bg-red-400 rounded-md p-1'>Join Room</button>
        </div>
        </div>
        </div>

  )
}

export default Landing