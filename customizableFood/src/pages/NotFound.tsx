import { ReactElement } from "react";
import Error from '../assets/Error.jpg'


type style = {
   height : string
   width : string
}
const style : style = {
    height : '100vh',
    width : '100vw'
}
export const NotFound = () : ReactElement =>  <img  style={style} src={Error} alt="Error" />
        
   
