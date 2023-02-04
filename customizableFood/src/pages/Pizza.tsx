import { ReactElement } from 'react'
import { Aside } from '../components/Aside'
import { Main } from '../components/Main'
import { PizzaIngredients } from '../components/helpers/Ingredients'
import { PizzaImages } from '../components/helpers/GetImages'
import '../styles/otherPages/mainAndHeader.scss'

const URL = 'http://localhost:5000/pizza'
const Ingredients : string[] = PizzaIngredients()
const submitButtonAriaLabel : string = 'Submit your pizza '
const h1 : string = "Style your pizza in your own way"


export const Pizza = () : ReactElement  =>{
    return(
        <div className="project" id='pizzaProject'>
           <Main h1 = {h1} submitButtonAriaLabel = {submitButtonAriaLabel} Ingredients = {Ingredients} URL = {URL}/>
           <Aside Images = {PizzaImages}/>
        </div>
    )
}