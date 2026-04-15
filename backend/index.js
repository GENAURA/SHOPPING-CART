import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import cors from "cors"
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

let port = process.env.PORT || 6000
let app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://shopping-cart-71m1.vercel.app/',
  ],
  credentials: true
}))

app.get('/', (req, res) => {
  res.json({ message: '🚀 API is running!' })
})

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/product", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/order", orderRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
  connectDb()
})
