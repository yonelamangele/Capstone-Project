import { signUpDB } from '../model/user2DB.js';
import bcrypt from 'bcrypt';

const signUpUser = async (req, res) => {
    let { userFirstName, userEmailAdd, userPassword } = req.body;
    
    if (!userPassword) {
        return res.status(400).send('Password is required');
    }
    
    try {
        
        const hashedP = await bcrypt.hash(userPassword, 10);

        
        await signUpDB(userFirstName, userEmailAdd, hashedP);
        
        
        res.send('User registered successfully :)');
    } catch (error) {
        
        console.error(error);
        res.status(500).send('Server error');
    }
};

export { signUpUser };
