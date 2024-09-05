import { getUsersDB, insertUserDB, getUserDB, updateUserDB, deleteUserDB } from '../model/userDB.js'
import {hash} from 'bcrypt'

const fetchUsers = async (req,res) => {
    res.json(await getUsersDB())
}

const fetchUser = async (req,res) => {
    res.json(await getUserDB(req.params.id))
}

const insertUser = async (req,res) => {
    let {firstName, lastName, userAge, gender, emailAdd, userPass, userProfile} = req.body
    console.log(req.body);

    hash(userPass, 10, async (err, hashedP) => {
        if (err) throw err
        console.log(hashedP)
        
        await insertUserDB(firstName, lastName, userAge, gender, emailAdd, hashedP, userProfile)
    })
    res.send('User registered successfully :)')
}

const updateUser = async (req,res) => {
    let {firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile} = req.body
    let Users = await getUserDB(req.params.id)

    hash(userPass, 10, async (err, hashedP) => {
        if (err) throw err
        console.log(hashedP);
        
        firstName?firstName=firstName:firstName=Users.firstName
        lastName?lastName=lastName:lastName=Users.lastName
        userAge?userAge=userAge:userAge=Users.userAge
        gender?gender=gender:gender=Users.gender
        userRole?userRole=userRole:userRole=Users.userRole
        emailAdd?emailAdd=emailAdd:emailAdd=Users.emailAdd
        hashedP?hashedP=hashedP:hashedP=Users.userPass
        userProfile?userProfile=userProfile:userProfile=Users.userProfile

        await updateUserDB(firstName, lastName, userAge, gender, userRole, emailAdd, hashedP, userProfile, req.params.id)
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

export { fetchUsers, insertUser, fetchUser, updateUser, deleteUser, loginUser }