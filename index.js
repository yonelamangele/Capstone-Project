import express from 'express'
import cors from 'cors'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRouter.js'
import cartRouter from './routes/cartRouter.js'

let port = process.env.PORT || 2006 

const app = express()

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}))

app.use(express.json())
app.use(express.static('public'))

app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/cart', cartRouter)

app.listen(port, () => {
    console.log('http://localhost:' +port)
})