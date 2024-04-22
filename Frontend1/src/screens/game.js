import React, { useEffect, useState } from 'react'
import Chessboard from '../components/chessboard'
import useSocket from '../hooks/useSocket'
import {Chess} from "chess.js"

function Game() {
    const socket = useSocket();
    const [chess, setChess] = useState(new Chess())
    const [board, setBoard] = useState(chess.board())

    useEffect(()=>{
if(!socket)
return

socket.onmessage = (event)=>
{
const message = JSON.parse(event.data);
console.log(message)
switch (message.type) {
    case "init_game":
        setChess(new Chess());
        setBoard(chess.board())
        console.log("Game initialisation")
                break;
                case "move":
                    const move = message.payload;
                    chess.move(move)
                    setBoard(chess.board())
                    console.log("Move")
                    break;
                    case "game_over":
                        console.log("game over")
                        break;

    default:
        break;
}
}
    },[socket])
  return (
   <div className='justify-center flex pt-8 max-w-screen-lg'>
    <div className='grid grid-cols-1 md:grid-cols-6 gap-4 w-full'>
<div className='col-span-4 self-center justify-center flex'>
    <Chessboard board ={board} socket={socket}/>
</div>
<div className='col-span-2 flex justify-center self-center'>
    <button onClick={()=>
    {
        socket.send(JSON.stringify({
            type :"init_game",

        }))
    }}>Play</button>
</div>
    </div>
   </div>
  )
}

export default Game