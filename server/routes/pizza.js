import Express from "express";
export const pizzaRouter = Express.Router()
const pizzas = []

pizzaRouter.get('/', (req, res) => {
    res.status(200).json(pizzas)
})
pizzaRouter.post('/', (req, res) => {
    res.status(200).json('A post request was made')
    const set = new Set(req.body)
    let toPush = Array.from(set).filter(el => el !== null)
    if (toPush.length) pizzas.push(toPush)

})