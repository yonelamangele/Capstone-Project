import { getProductsDB, getProductDB, insertProductDB, updateProductDB, deleteProductsDB, deleteProductDB } from '../model/cartDB.js'
import {hash} from 'bcrypt'

const fetchProducts = async (req,res) => {
    res.json(await getProductsDB())
}

const insertProduct = async (req,res) => {
    let {prodID, userID, prodQuantity} = req.body
    console.log(req.body);

    await insertProductDB(prodID, userID, prodQuantity)
    res.send('Product added successfully :)')
}

const updateProduct = async (req,res) => {
    let {prodID, userID, prodQuantity} = req.body
    let Products = await getProductDB(req.params.id);
        
        prodID?prodID=prodID:prodID=Products.prodID
        userID?userID=userID:userID=Products.userID
        prodQuantity?prodQuantity=prodQuantity:prodQuantity=Products.prodQuantity

        await updateProductDB(prodID, userID, prodQuantity, req.params.id)
        res.send('Product has been updated')
}

const deleteProducts = async (req,res) => {
    res.json(await deleteProductsDB())
}

const deleteProduct = async (req,res) => {
    await deleteProductDB(req.params.id)
    res.send('Product has been deleted')
}

export { fetchProducts, insertProduct, updateProduct, deleteProducts, deleteProduct }