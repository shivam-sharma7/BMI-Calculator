
const express = require("express");
const bodyParse  = require("body-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{

    res.sendFile(__dirname +"/index.html");
     

});

app.post("/", (req, res)=>{
 
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;
    res.send("The answer is: "+ result);
 
});

app.post("/subtract", (req, res)=>{

    let num3 = Number(req.body.num3);
    let num4 = Number(req.body.num4);

    let result1 = num3 - num3;
    res.send("The answer is: "+ result1);

});

app.post("/multiply", (req, res)=>{
   
    let num5 = Number(req.body.num5);
    let num6 = Number(req.body.num6);

    let result2 = num5 * num6;

    res.send("The answer is: "+ result2);

});

app.post("/divide", (req, res)=>{

    let num7 = Number(req.body.num7);
    let num8 = Number(req.body.num8);

    let result3 = num7 / num8;

    res.send("The answer is: "+ result3);
})

app.listen(3000, ()=>{

    console.log("server is running at port 3000");
})
