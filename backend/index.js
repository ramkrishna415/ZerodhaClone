require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser =require('body-parser');
const cors =require('cors');

const { HoldingsModel } = require("./modal/HoldingsModel");
const { positionsModel } = require("./modal/PositionsModel");
//const { OrdersModel } = require("./modal/OrdersModel");
const {OrdersModel} = require("./modal/OrdersModel");
//const { session } = require("passport");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local")
const User = require("./schemas/user");
const userRouter =require("./controller/auth");


//const {HoldingsModel}=require('./modal/HoldingsModel');
// const {positionsModel}=require('./modal/PositionsModel');
const port = process.env.port ||3002;
const uri = process.env.MONGO_URL;


const app =express();
app.use(cors());
app.use(bodyParser.json());

// app.get('/addposition',async(req,res)=>{
// let tempPosition=[
//      {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
//  tempPosition.forEach((item)=>{
//  let newPosition=new positionsModel({
//      product:item.product,
//     name:item.name,
//     qty:item.qty,
//     avg:item.avg,
//     price:item.price,
//     net:item.net,
//     day:item.day,
//     isLoss:item.isLoss,
//  });
//  //newPosition.save();
//  });
//  //res.send("Done ram!");
// });

const sessionOptionss = {
    secret:"mySuperSecretCode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
};

app.use(session(sessionOptionss));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use("/",userRouter);

// app.get("/demo",async(req,res)=>{
//     let fakeuser = new User({
//         email:"ram@67gmail.com",
//         username:"delta",
//     });
//     let registeredUser = await User.register(fakeuser,"helloji");
//     res.send(registeredUser);
// });
const authRoutes = require('./controller/auth.js');
app.use('/api', authRoutes);

app.get("/allHoldings",async(req,res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions",async(req,res)=>{
    let allPositions = await positionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder",async(req,res)=>{
    let newOrder = new OrdersModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode,
    });
    newOrder.save();

    res.send("order saved");
})


app.listen(port,()=>{
    console.log("App started!");
    mongoose.connect(uri);
    console.log("db connected");
});
