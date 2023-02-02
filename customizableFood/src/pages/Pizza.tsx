import { ReactElement } from 'react'
import { Aside } from '../components/pizza/Aside'
import { Main } from '../components/pizza/Main'
import '../styles/pizza.scss'
export const Pizza = () : ReactElement  =>{
    return(
        <div className="project" id='pizzaProject'>
           <Main/>
           <Aside/>
        </div>
    )
}