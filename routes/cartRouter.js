import express from 'express'
import { fetchProducts, insertProduct, updateProduct, deleteProducts, deleteProduct } from '../controller/cartController.js'

const router = express.Router()

router.get('/user/:id/carts', fetchProducts)

router.post('/user/:id/cart', insertProduct)

router.patch('/user/:id/cart/:id', updateProduct)

router.delete('/user/:id/cart', deleteProducts)

router.delete('/user/:id/cart/:id', deleteProduct)

export default router