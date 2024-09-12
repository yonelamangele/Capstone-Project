import {pool} from '../config/config.js'

const  getUsersDB = async () => {
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserDB = async (id) => {
    let [[data]] = await pool.query('SELECT * FROM users WHERE userID = ?', [id])
    return data
}
const loginDB = async (userEmailAdd) => {
    let [[data]] = await pool.query('SELECT * FROM users WHERE userEmaillAdd = ?', [userEmailAdd])
    return data
}

const insertUserDB = async (userFirstName, userLastName, userAge, userGender, userEmailAdd, userPassword, userProfile) => {
    let [data] = await pool.query(`
        INSERT INTO users (userFirstName, userLastName, userAge, userGender, userEmailAdd, userPassword, userProfile) VALUES (?, ?, ?, ?, ?, ?, ?)
        `, [userFirstName, userLastName, userAge, userGender, userEmailAdd, userPassword, userProfile])
}

const updateUserDB = async (userFirstName, userLastName, userAge, userGender, userRole, userEmailAdd, userPassword, userProfile, id) => {
     await pool.query('UPDATE users SET userFirstName = ?, userLastName = ?, userAge = ?, userGender = ?, userRole = ?, userEmailAdd = ?, userPassword = ?, userProfile = ? WHERE userID = ?', [userFirstName, userLastName, userAge, userGender, userRole, userEmailAdd, userPassword, userProfile, id])
}

const deleteUserDB = async (id) => {
    let [data] = await pool.query('DELETE FROM users WHERE userID = ?', [id])
    return data
}

export {getUsersDB, getUserDB, insertUserDB, updateUserDB, deleteUserDB, loginDB}