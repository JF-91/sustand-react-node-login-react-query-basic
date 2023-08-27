import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';

//TODO: POST
export const loginHandler = (req : Request, res : Response) =>{

    //procesar el request body
    //validacion del body
    //store in database - mongo- mysql -postgresql -etc
   

    //TODO: TOKEN GENERATOR
    const token = jwt.sign({
        test : "test"
    }, 'secret-key', {expiresIn: 60 * 60 * 24})

    return res.json({
        token: token
    })
}



//TODO: GET
export const profileHandler = (req: Request, res: Response)=>{

    
    return res.json({
        profile: req.user,
        msg:"profile data"
    })

}   