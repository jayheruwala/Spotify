import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/coludinary.js';
import albumRouter from './src/routes/albumRoute.js';


//app config
const app = express();

const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();


//middlewares
app.use(express.json());
app.use(cors());

// initializing routes
app.get('/',(req,res)=>res.send("API Working"));
app.use('/api/song',songRouter);
app.use('/api/album',albumRouter);


app.listen(PORT,()=>console.log(`Server started on ${PORT}`))