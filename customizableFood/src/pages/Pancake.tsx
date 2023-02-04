import { ReactElement } from 'react'
import { Aside } from '../components/Aside'
import { Main } from '../components/Main'
import { PancakeIngredients } from '../components/helpers/Ingredients'
import { PancakeImages } from '../components/helpers/GetImages'
import '../styles/otherPages/mainAndHeader.scss'


const URL = 'http://localhost:5000/pancake'
const submitButtonAriaLabel : string = 'Submit your pancake !'
const Ingredients : string[] = PancakeIngredients()
const h1 : string = 'Choose the style , let it be the best !'

export const Pancake = () : ReactElement =>{
    return(
        <div className="project" id='pancakeProject'>
           <Main h1 = {h1} submitButtonAriaLabel = {submitButtonAriaLabel} Ingredients = {Ingredients} URL = {URL}/>
           <Aside Images = {PancakeImages}/>
        </div>
    )
} 