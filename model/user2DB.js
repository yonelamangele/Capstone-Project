import {pool} from '../config/config.js'


const signUpDB = async (userFirstName, userEmailAdd, userPassword) => {
    let [data] = await pool.query(`
        INSERT INTO users2 (userFirstName, userEmailAdd, userPassword) VALUES (?, ?, ?)
        `, [userFirstName, userEmailAdd, userPassword])
}

const loginDB = async (userEmailAdd) => {
    let [[data]] = await pool.query('SELECT * FROM users2 WHERE userEmailAdd = ?', [userEmailAdd])
    console.dir(data);
    
    return data
}

export { signUpDB, loginDB }