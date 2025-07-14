require("dotenv").config();

const express=require("express");
const mongoose=require("mongoose");
const {holdingModel}=require("./model/holdingModel");
const {positionModel}=require("./model/positionModel");
const {ordersModel}=require("./model/ordersModel");
const bodyParser=require("body-parser");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/AuthRoutes");
const cors=require("cors");


const PORT=process.env.PORT || 3002;
const url=process.env.MONGO_URL;
const app=express();

app.use(bodyParser.json());
app.use(cors({
origin: "http://localhost:3000", // ✅ your frontend
credentials: true               // ✅ allow cookies
}));
    
app.use(cookieParser());
app.use(express.json());

try{
mongoose.connect(url);
console.log("DB connected!")
}catch(e){
    console.log("DB not connected!")
}

//api endpoint for holdings
app.get("/allholdings",async(req,res)=>{
    let allHoldings=await holdingModel.find({});
    res.json(allHoldings);
});

//api endpoint for positions
app.get("/allpositions",async(req,res)=>{
    let allPositions=await positionModel.find({});
    res.json(allPositions);
});

//for buy stock
app.post("/newOrder",async(req,res)=>{
    const newOrder= new ordersModel({
        name: req.body.name,
        qty: req.body.qty,
        price:req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();
    res.send("order saved!");
})

app.use("/", authRoutes);

app.listen(PORT,()=>{
    console.log("app is listening");
})