import Express from "express";
export const pancakeRouter = Express.Router()
const pancakes = []

pancakeRouter.get('/', (req, res) => {
    res.status(200).json(pancakes)
})
pancakeRouter.post('/', (req, res) => {
    res.status(200).json('A post request was made')
    const set = new Set(req.body)
    let toPush = Array.from(set).filter(el => el !== null)
    if (toPush.length) pancakes.push(toPush)

})