import Express from "express";
export const router = Express.Router()
const pizzas = []

router.get('/', (req, res) => {
    res.status(200).json(pizzas)
})
router.post('/', (req, res) => {
    res.status(200).json('A post request was made')
    const set = new Set(req.body)
    let toPush = Array.from(set).filter(el => el !== null)
    if (toPush.length) pizzas.push(toPush)

})