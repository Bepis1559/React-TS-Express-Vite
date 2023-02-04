import { ReactElement } from "react";
import PizzaHome from '../../assets/PizzaHome.png'
import HamHome from '../../assets/HamHome.jpg'
import PancakeHome from '../../assets/PancakeHome.jpg'
import { Section } from "./Section";
import text from './helpers/productDescription.json'

export const Main = ():ReactElement =>{
    return(
        <main id="Main-Home">
             <Section sectionId = 'PizzaSection' ImageSrc = {PizzaHome} text = {text.pizzaDescription}  />
             <Section sectionId = 'HamSection' ImageSrc = {HamHome} text = {text.hamDescription} />
             <Section sectionId = 'PancakeSection' ImageSrc = {PancakeHome} text = {text.pancakeDescription}  />
        </main>
    )
}