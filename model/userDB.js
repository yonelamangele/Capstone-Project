import {pool} from '../config/config.js'

const  getUsersDB = async () => {
    let [data] = await pool.query('SELECT * FROM Users')
    return data
}

const getUserDB = async (emailAdd) => {
    let [[data]] = await pool.query('SELECT * FROM Users WHERE emailAdd = ?', [emailAdd])
    return data
}

const insertUserDB = async (firstName, lastName, userAge, gender, emailAdd, userPass, userProfile) => {
    let [data] = await pool.query(`
        INSERT INTO Users (firstName, lastName, userAge, gender, emailAdd, userPass, userProfile) VALUES (?, ?, ?, ?, ?, ?, ?)
        `, [firstName, lastName, userAge, gender, emailAdd, userPass, userProfile])
}

const updateUserDB = async (firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, id) => {
     await pool.query('UPDATE Users SET firstName = ?, lastName = ?, userAge = ?, gender = ?, userRole = ?, emailAdd = ?, userPass = ?, userProfile = ? WHERE userID = ?', [firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, id])
}

const deleteUserDB = async (id) => {
    let [data] = await pool.query('DELETE FROM Users WHERE userID = ?', [id])
    return data
}

export {getUsersDB, getUserDB, insertUserDB, updateUserDB, deleteUserDB}