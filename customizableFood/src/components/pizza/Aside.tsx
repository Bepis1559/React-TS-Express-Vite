import { ReactElement } from 'react'
import { GetPizzas } from './helpers/GetPizzas'
import { ImageContainer } from './ImageContainer'
import {v4 as uuidv4} from 'uuid'



export const Aside = () : ReactElement =>{

  const sources : string[] = GetPizzas()
 return(
        <aside id='pizzaAside'>
          {sources.map((source : string) : ReactElement => <ImageContainer key = {uuidv4()} src = {source}/>)}
        </aside>
        
    )
}