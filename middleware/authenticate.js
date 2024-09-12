import { compare } from "bcrypt";
import { loginDB } from "../model/user2DB.js";
import jwt from 'jsonwebtoken'
import { config } from "dotenv";
config()

const checkUser = async(req,res,next) => {
    const {userEmailAdd, userPassword} = req.body;
    let hashedPassword = (await loginDB(userEmailAdd)).userPassword
    console.log(hashedPassword);
    
    compare(userPassword, hashedPassword, (err,result) => {
        if(result==true) {
            let token = jwt.sign({userEmailAdd:userEmailAdd}, process.env.SECRET_KEY,
                {expiresIn:'1h'})
                console.log(token);
                req.body.token = token
            next()
            return
        }
        res.send('Password incorrect')
    })
}

export {checkUser}