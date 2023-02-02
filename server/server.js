import Express from "express";
import cors from 'cors'
import { router } from "./routes/pizza.js";
const app = Express()
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:5173' }))
app.use('/pizza', router)
app.listen(5000, () => console.log("Items server started on port 5000"))