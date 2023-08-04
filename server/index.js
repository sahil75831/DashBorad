import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';


// configurations
dotenv.config();
const app = express();
app.use(helmet()); // 1
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"})); // 2
app.use(express.json());// 3
app.use(morgan("common")) // 4
app.use(bodyParser.json())// 5
app.use(bodyParser.urlencoded({extended:false}))// 6


// routes
app.use('/client',clientRoutes);
app.use('/general',generalRoutes);
app.use('/management',managementRoutes);
app.use('/salesRoutes',salesRoutes);


// mongoose setup
const PORT = process.env.PORT || 9000
mongoose.connect("mongodb://0.0.0.0:27017/BlogUsers", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{console.log("connected sucessfully to mongo")})
.catch((err)=>{console.log("conntion error",err)})


app.listen(PORT, ()=>{console.log(`connected sucessfully to port ${PORT}`)})