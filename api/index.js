const express = require(`express`); //เรียกใช้ express
const path = require(`path`);//เรียกใช้ path
const myApp =  express();//เก็บ express
const ejs = require(`ejs`);
const port = 3000;

myApp.use(express.static(path.join(__dirname,'../public')));
myApp.set(`view engine`, 'ejs');
myApp.set('views', path.join(__dirname,'../views'))

myApp.use(express.static('public'));
myApp.set(`view engine`,`ejs`); 


myApp.get(`/`, (req,res)=>{
    
    res.render(`home`,{title: "หน้าแรก"});

});

myApp.get(`/about`, (req,res)=>{

    res.render(`about`, {title: "ประวัติ"});

})

myApp.get(`/archive`, (req,res)=>{
    
    res.render(`archive`, {title: "ผลงาน"});

});

myApp.get(`/activity`, (req,res)=>{
    
    res.render(`activity`, {title: "กิจกรรม"});

});

myApp.get(`/contact`, (req,res)=>{
    
    res.render(`contact`, {title: "ติดต่อ"});

});



myApp.listen(port,() => {

    console.log(`Sever running at <http://localhost> :${port}`);

});

const app = myApp;
module.exports = app;
