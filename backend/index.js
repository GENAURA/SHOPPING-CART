import express from 'express'
import dotenv from 'dotenv'
dotenv.config() // ⚠️ move this to the TOP before any other imports
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
    'http://localhost:5173',   // frontend dev
    'http://localhost:5174',   // admin dev
    'https://shopping-cart-frontendone.onrender.com',  // old frontend
    'https://shopping-cart-admin.onrender.com',        // old admin
    'https://shopping-cart-black-omega.vercel.app',    // new frontend on Vercel
    // add your admin Vercel URL here after deploying admin
  ],
  credentials: true
}))

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/product", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/order", orderRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
  connectDb()
})
