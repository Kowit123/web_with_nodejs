const express = require(`express`); //เรียกใช้ express
const path = require(`path`);//เรียกใช้ path
const myApp =  express();//เก็บ express
const ejs = require(`ejs`);
const port = 3000;

myApp.use(express.static('public'));
myApp.set(`view engine`,`ejs`); 

myApp.get(`/`, (req,res)=>{
    
    res.render(`home`,{title: "หน้าแรก"});

});

myApp.listen(port,() => {

    console.log(`Sever running at <http://localhost> :${port}`);

});

const app = myApp;
module.exports = app;

