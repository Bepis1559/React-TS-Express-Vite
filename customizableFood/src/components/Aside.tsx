import { ReactElement } from 'react'
import { ImageContainer } from './ImageContainer'
import {v4 as uuidv4} from 'uuid'



export const Aside = ({Images} : any) : ReactElement =>{

  const sources : string[] = Images()
 return(
        <aside id='Aside'>
          {sources.map((source : string) : ReactElement => <ImageContainer key = {uuidv4()} src = {source}/>)}
        </aside>
        
    )
}