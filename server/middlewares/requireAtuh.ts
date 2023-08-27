import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export const requireAuth = async (req: Request, res: Response, next: NextFunction)=>{

    const authHeader = req.headers.authorization
    if( !authHeader )return res.status(401).json({msg: "not authorized"})


    const token = authHeader.split(" ")[1]

    if( !token) return res.status(401).json({msg: "not authorized"})


    jwt.verify(token, 'secret-key', (err, user)=>{
        if(err) return  res.status(401).json({msg: "not authorized"})
        console.log(user);


        req.user = user
        next();
    })

  
}