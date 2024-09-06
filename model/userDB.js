import {pool} from '../config/config.js'

const  getUsersDB = async () => {
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserDB = async (id) => {
    let [[data]] = await pool.query('SELECT * FROM users WHERE userID = ?', [id])
    return data
}

const insertUserDB = async (firstName, lastName, userAge, gender, emailAdd, userPass, userProfile) => {
    let [data] = await pool.query(`
        INSERT INTO users (firstName, lastName, userAge, gender, emailAdd, userPass, userProfile) VALUES (?, ?, ?, ?, ?, ?, ?)
        `, [firstName, lastName, userAge, gender, emailAdd, userPass, userProfile])
}

const updateUserDB = async (firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, id) => {
     await pool.query('UPDATE users SET firstName = ?, lastName = ?, userAge = ?, gender = ?, userRole = ?, emailAdd = ?, userPass = ?, userProfile = ? WHERE userID = ?', [firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, id])
}

const deleteUserDB = async (id) => {
    let [data] = await pool.query('DELETE FROM users WHERE userID = ?', [id])
    return data
}

export {getUsersDB, getUserDB, insertUserDB, updateUserDB, deleteUserDB}