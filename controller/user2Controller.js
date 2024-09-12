import { signUpDB } from '../model/user2DB.js'
import {hash} from 'bcrypt'

const signUpUser = async (req,res) => {
    let {userFirstName, userEmailAdd, userPassword} = req.body
    console.log(req.body);

    hash(userPassword, 10, async (err, hashedP) => {
        if (err) throw err
        console.log(hashedP)
        
        await signUpDB(userFirstName, userEmailAdd, hashedP)
    })
    res.send('User registered successfully :)')
}

export { signUpUser }