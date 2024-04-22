import { Chess } from "chess.js";
import { WebSocket } from "ws";
import { GAME_OVER, INIT_GAME, MOVE } from "./messages";

export class Game
{

    public player1 :WebSocket;
    public player2 : WebSocket;
    // private board : string;
    private moves : string[];;
    public board : Chess;
    private startTime : Date;

    constructor(player1 :WebSocket,player2: WebSocket)
    {
        this.player1 =player1;
        this.player2 = player2;
        this.board = new Chess();
        this.moves =[];
        this.startTime = new Date();
        this.player1.send(JSON.stringify({
            type : INIT_GAME,
            color : "white"
        }))
        this.player2.send(JSON.stringify({
            type : INIT_GAME,
            color : "black"
        }))
    }
    makeMove(player : WebSocket,move :{from  : string,to :string})
    {

        if((player == this.player1 && this.board.turn()=='w') || (player == this.player2 && this.board.turn()=='b') )
        {// check if it is a valid move
        try{
            this.board.move(move);
            console.log(move)
            
        }
        catch(e)
        {
            console.log(e)
            return;
        }
    }
    else
    {
        return;
    }

        if(this.board.isGameOver())
            {
                this.player1.emit(JSON.stringify({type :GAME_OVER,
                    payload : {
                        winner : this.board.turn()== 'w'? 'black':'white'
                    }
                }));
                this.player2.emit(JSON.stringify({type :GAME_OVER,
                    payload : {
                        winner : this.board.turn()== 'w'? 'black':'white'
                    }
                }));
            
            }
if(this.board.turn()=='b')
    {
        this.player2.send(JSON.stringify(

            {
                type : MOVE,
                payload : move
            }
        ))
    }
    else
    {
        this.player1.send(JSON.stringify(

            {
                type : MOVE,
                payload : move
            }
        )) 
    }

    }
}