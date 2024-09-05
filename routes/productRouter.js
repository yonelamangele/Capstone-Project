import express from 'express'
import { fetchProducts, insertProduct, fetchProduct, updateProduct, deleteProduct, addToCart } from '../controller/productController.js'

const router = express.Router()

router.post('/cart', addToCart)

router.get('/', fetchProducts)
router.post('/addProducts', insertProduct)

router.get('/:id', fetchProduct)
router.delete('/delete/:id', deleteProduct)
router.patch('/update/:id', updateProduct)

export default router