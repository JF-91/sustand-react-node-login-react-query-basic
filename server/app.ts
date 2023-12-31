import express from 'express'
import authRoutes from './routes/auth.route'
import cors from 'cors'


export const app = express();


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}) )
app.use(authRoutes)