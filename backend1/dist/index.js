"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "express"
const ws_1 = require("ws");
const GameManager_1 = require("./GameManager");
const gameManager = new GameManager_1.GameManager();
const wss = new ws_1.WebSocketServer({ port: 8080 });
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
