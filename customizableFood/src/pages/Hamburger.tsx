import { ReactElement } from 'react'
import { Aside } from '../components/Aside'
import { Main } from '../components/Main'
import { HamburgerIngredients } from '../components/helpers/Ingredients'
import { HamImages } from '../components/helpers/GetImages'
import '../styles/otherPages/mainAndHeader.scss'

const URL = 'http://localhost:5000/hamburger'
const submitButtonAriaLabel : string = 'Submit your hamburger !'
const Ingredients : string[] = HamburgerIngredients()
const h1 : string = 'Make this ham the best ham  !'

export const Hamburger = () : ReactElement =>{
    return (
        <div className="project" id='hamProject'>
           <Main h1 = {h1} submitButtonAriaLabel = {submitButtonAriaLabel} Ingredients = {Ingredients} URL = {URL}/>
           <Aside Images = {HamImages}/>
        </div>
    )
}