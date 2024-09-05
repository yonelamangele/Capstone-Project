import {pool} from '../config/config.js'

const  getProductsDB = async () => {
    let [data] = await pool.query('SELECT * FROM products_table')
    return data
}

const  getProductDB = async (id) => {
    let [[data]] = await pool.query('SELECT * FROM products_table WHERE prodID = ?', [id])
    return data
}

const  insertProductDB = async (prodName, prodQuantity, prodAmount, prodCategory, prodDescription, prodUrl) => {
    let [data] = await pool.query(`
        INSERT INTO products_table (prodName, prodQuantity, prodAmount, prodCategory, prodDescription, prodUrl) VALUES (?, ?, ?, ?, ?, ?)
        `, [prodName, prodQuantity, prodAmount, prodCategory, prodDescription, prodUrl])
}

const  updateProductDB = async (prodName, prodQuantity, prodAmount, prodCategory, prodDescription, prodUrl, id) => {
    await pool.query('UPDATE products_table SET prodName = ?, prodQuantity = ?, prodAmount = ?, prodCategory = ?, prodDescription = ?, prodUrl = ? WHERE prodID = ?', [prodName, prodQuantity, prodAmount, prodCategory, prodDescription, prodUrl, id])
}

const deleteProductDB = async (id) => {
    let [data] = await pool.query('DELETE FROM products_table WHERE prodID = ?', [id])
    return data
}

const addToCartDB = async (prodID, userID) => {
    await pool.query('INSERT INTO Cart (prodID, userID) VALUES (?,?)', [prodID, userID])
}

export {getProductsDB, getProductDB, insertProductDB, updateProductDB, deleteProductDB, addToCartDB}