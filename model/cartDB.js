import {pool} from '../config/config.js'

const  getProductsDB = async () => {
    let [data] = await pool.query('SELECT * FROM cart')
    return data
}

const  getProductDB = async (id) => {
    let [[data]] = await pool.query('SELECT * FROM cart WHERE cartID = ?', [id])
    return data
}

const insertProductDB = async (prodID, userID, prodQuantity) => {
    let [data] = await pool.query(`
        INSERT INTO cart (prodID, userID, prodQuantity) VALUES (?, ?, ?)
        `, [prodID, userID, prodQuantity])
}

const updateProductDB = async (prodID, userID, prodQuantity, id) => {
    await pool.query('UPDATE cart SET prodID = ?, userID = ?, prodQuantity = ? WHERE cartID = ?', [prodID, userID, prodQuantity, id])
}

const deleteProductsDB = async (userID) => {
    let [data] = await pool.query('DELETE * FROM cart WHERE userID = ?', [userID])
    return data
}

const deleteProductDB = async (id) => {
    let [data] = await pool.query('DELETE FROM cart WHERE cartID = ?', [id])
    return data
}

export { getProductsDB, getProductDB, insertProductDB, updateProductDB, deleteProductsDB, deleteProductDB }


/* 
    INSERT INTO cart(prodID, userID, prodQuantity) 
    VALUES (?, ?, ?)

    WHERE userID = ? OR prodID = ?
*/