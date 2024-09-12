import { getUsersDB, insertUserDB, getUserDB, updateUserDB, deleteUserDB, signUpDB } from '../model/userDB.js'
import {hash} from 'bcrypt'

const fetchUsers = async (req,res) => {
    res.json(await getUsersDB())
}

const fetchUser = async (req,res) => {
    res.json(await getUserDB(req.params.id))
}

const insertUser = async (req,res) => {
    let {userFirstName, userLastName, userAge, userGender, userEmailAdd, userPassword, userProfile} = req.body
    console.log(req.body);

    hash(userPassword, 10, async (err, hashedP) => {
        if (err) throw err
        console.log(hashedP)
        
        await insertUserDB(userFirstName, userLastName, userAge, userGender, userEmailAdd, hashedP, userProfile)
    })
    res.send('User registered successfully :)')
}
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

const updateUser = async (req,res) => {
    let {userFirstName, userLastName, userAge, userGender, userRole, userEmailAdd, userPassword, userProfile} = req.body
    let Users = await getUserDB(req.params.id)

    hash(userPassword, 10, async (err, hashedP) => {
        if (err) throw err
        console.log(hashedP);
        
        userFirstName?userFirstName=userFirstName:userFirstName=Users.userFirstName
        userLastName?userLastName=userLastName:userLastName=Users.userLastName
        userAge?userAge=userAge:userAge=Users.userAge
        userGender?userGender=userGender:userGender=Users.userGender
        userRole?userRole=userRole:userRole=Users.userRole
        userEmailAdd?userEmailAdd=userEmailAdd:userEmailAdd=Users.userEmailAdd
        hashedP?hashedP=hashedP:hashedP=Users.userPassword
        userProfile?userProfile=userProfile:userProfile=Users.userProfile

        await updateUserDB(userFirstName, userLastName, userAge, userGender, userRole, userEmailAdd, hashedP, userProfile, req.params.id)
        res.send('User has been updated')
    })
}

const deleteUser = async (req,res) => {
    await deleteUserDB(req.params.id)
    res.send('User has been deleted')
}

const loginUser = (req,res) => {
    res.json({
        message: "You have signed in :)",
        token: req.body.token
    })
}

export { fetchUsers, insertUser, fetchUser, updateUser, deleteUser, loginUser, signUpUser }