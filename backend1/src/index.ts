// import express from "express"
import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

const gameManager = new GameManager();
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    gameManager.addUser(ws);
  ws.on('error', console.error);

//   ws.on('message', function message(data) {
//     // console.log(JSON.parse(data.toString()))
//     console.log('received: %s', data);
//     console.log(data.toString())
//   });

//   ws.send('something from server');

});