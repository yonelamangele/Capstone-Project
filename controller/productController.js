import { getProductsDB, insertProductDB, getProductDB, updateProductDB, deleteProductDB, addToCartDB } from '../model/productDB.js'

const fetchProducts = async (req,res) => {
    res.json(await getProductsDB())
}

const fetchProduct = async (req,res) => {
    res.json(await getProductDB(req.params.id))
}

const insertProduct = async (req,res) => {
    let {prodName, prodQuantity, prodAmount, prodCategory, prodDescription, prodUrl} = req.body
    console.log(req.body);

    await insertProductDB(prodName, prodQuantity, prodAmount, prodCategory, prodDescription, prodUrl)
    res.send('Product added successfully :)')
}

const updateProduct = async (req,res) => {
    let {prodName, prodQuantity, prodAmount, prodCategory, prodDescription, prodUrl} = req.body
    let Products = await getProductDB(req.params.id);
        
        prodName?prodName=prodName:prodName=Products.prodName
        prodQuantity?prodQuantity=prodQuantity:prodQuantity=Products.prodQuantity
        prodAmount?prodAmount=prodAmount:prodAmount=Products.prodAmount
        prodCategory?prodCategory=prodCategory:prodCategory=Products.prodCategory
        prodDescription?prodDescription=prodDescription:prodDescription=Products.prodDescription
        prodUrl?prodUrl=prodUrl:prodUrl=Products.prodUrl

        await updateProductDB(prodName, prodQuantity, prodAmount, prodCategory, prodUrl, req.params.id)
        res.send('Product has been updated')
}

const deleteProduct = async (req,res) => {
    await deleteProductDB(req.params.id)
    res.send('Product has been deleted')
}

const addToCart = async (req,res) => {
    console.log(req.body);

    let {id} = await getProductDB(req.body.emailAdd)
    console.log(id);
    
    // await addToCartDB(req.body.id)
    res.json({message: "You've added an item to cart"})
}

export { fetchProducts, insertProduct, fetchProduct, updateProduct, deleteProduct, addToCart }