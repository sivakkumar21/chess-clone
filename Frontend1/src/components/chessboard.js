import React, { useState } from 'react'
import {Chess} from 'chess.js'


function Chessboard({board,socket}) {
    const cellNameAlpha = ['a','b','c','d','e','f','g','h']
    // const chess = new Chess();
    console.log(board)
    const [from, setFrom] = useState(null);
    const [toValue, setToValue] = useState(null);

  return (
    // create a chessboard with chess.js

    <div>
        {
            board.map((row,i)=>
        {
            return <div key={i} className='flex'>
                {row.map((square,j)=>
                {
                    return <div
                     key={j}  
                     onClick={
                         ()=>
                         {
                if(!from)
                {
                    setFrom(square?.square)
                }
                else{
                    let temp = cellNameAlpha[j]+(8-i)
                                         socket.send(JSON.stringify({
                        type : "move",
                        payload :{
                        from : from,
                        to : temp
                        }
                    }))
                    console.log({from},{temp})
                    setFrom(null)
                
                    
                }
            

            }}
                    className={`w-8 h-8 text-black flex items-center justify-center ${(i+j)%2==0 ? 'bg-green-500': 'bg-white'}`}>
                        {square? square.type : ""}
                        </div>
                })}
                </div>
        })
        }
        
    </div>
    
)
}

export default Chessboard