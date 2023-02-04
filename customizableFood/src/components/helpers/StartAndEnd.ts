import { PizzaIngredients } from "./Ingredients"

type twoPoints = {
    start: number,
    end: number
}
const Ingredients = PizzaIngredients()
export const generateStartAndEnd = (): twoPoints[] => {


    let start: number = 0
    let end: number = 2
    let arr: twoPoints[] = [{ start: start, end: end }]

    while (end <= Ingredients.length - 2) {
        start += 2
        end += 2
        arr.push({ start: start, end: end })
    }

    return arr
}