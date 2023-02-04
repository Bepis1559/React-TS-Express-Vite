import Express from "express";
export const hamburgerRouter = Express.Router()
const hamburgers = []

hamburgerRouter.get('/', (req, res) => {
    res.status(200).json(hamburgers)
})
hamburgerRouter.post('/', (req, res) => {
    res.status(200).json('A post request was made')
    const set = new Set(req.body)
    let toPush = Array.from(set).filter(el => el !== null)
    if (toPush.length) hamburgers.push(toPush)

})