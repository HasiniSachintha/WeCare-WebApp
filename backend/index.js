import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.js";
import userRoutes from "./Routes/user.js";
import doctorRoutes from "./Routes/doctor.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin:true
};

app.get("/",(req,res)=>{
  res.send("Api is working")
});

//database connection
mongoose.set('strictQuery',false);
const connectDB = async () =>{
  try{
    await mongoose.connect(process.env.MONGO_URL,{
      // useNewUrlParser:true,
      // useUnifiedTopology:true,
    })
    console.log("Database connected successfully");
  }catch(error){
    console.log("Error connecting to database",error);
  }
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/users",userRoutes);
app.use("/api/v1/doctors",doctorRoutes);


app.listen(port, ()=>{
  connectDB();
  console.log(`Server is running on port ${port}`);
  
})