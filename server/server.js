import Express from "express";
import cors from 'cors'
import { pizzaRouter } from "./routes/pizza.js";
import { pancakeRouter } from "./routes/pancake.js";
import { hamburgerRouter } from "./routes/hamburger.js";
const app = Express()
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:5173' }))
app.use('/pizza', pizzaRouter)
app.use('/pancake', pancakeRouter)
app.use('/hamburger', hamburgerRouter)
app.listen(5000, () => console.log("Items server started on port 5000"))