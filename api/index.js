const express = require(`express`); //เรียกใช้ express
const myApp =  express();//เก็บ express
const path = require(`path`);
const port = 3000;

myApp.get(`/`, (req,res)=>{
    
    res.send(`hello world`);

});

myApp.listen(port,() => {

    console.log(`Sever running at <http://localhost> :${port}`);

});

const app = myApp;
module.exports = app;

