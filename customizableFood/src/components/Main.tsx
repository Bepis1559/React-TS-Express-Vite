import { ReactElement,useRef,useEffect } from "react"
import {  Ingredient } from "./Ingredient"
import {v4 as uuidv4} from 'uuid'
import { getIngredientsPerRow } from "./helpers/Ingredients"
import { generateStartAndEnd } from "./helpers/StartAndEnd"
import { SubmitButton } from "./SubmitButton"




export const Main = ({URL,Ingredients,submitButtonAriaLabel,h1} : any) : ReactElement =>{
    const rows = useRef<HTMLDivElement[]>([])
    const observer : any = useRef(null)


    useEffect(() =>{
        observer.current  = new IntersectionObserver((entries : any[]) =>{
           entries.forEach(entry => {
              entry.target.classList.toggle('show',entry.isIntersecting)
              if (entry.isIntersecting) observer.current.unobserve(entry.target)
           })
        })
        rows.current.forEach(row => {
            observer.current.observe(row)
        })

        return () =>{
           observer.current.disconnect();
        }
    },[])

    type twoPoints = {
        start: number,
        end: number
    }
     const points : twoPoints[] = generateStartAndEnd()
     
    return (
        <main id="Main">
            <header id="Header"><h1 id="H1">{h1}</h1></header>
            <form method="post" id="Form">      


            {points.map((point : twoPoints , index : number ) : ReactElement =>  // points arr has 25 objects of type point , going like 0 to 2, 2 to 4 , 4 to 6 and so on until 48 to 50
            <div                                                              // so , create a row , for each point (25 rows)   with two Ingredients per row
            key={uuidv4()} 
            className="row"
            ref={(rowReference : HTMLDivElement) => (rows.current[index] = rowReference)}
            > 

            {getIngredientsPerRow(point.start,point.end,Ingredients).map((ingredient: string) : ReactElement => // get 2 ingredients per every row , slicing the Ingredients array with el.start and el.end  
            // (0 and 2 for example) and passing the array , which we want to use the ingredients of
            <Ingredient key = {uuidv4()} name = {ingredient} />)}

            </div> )}
               <SubmitButton submitButtonAriaLabel = {submitButtonAriaLabel} URL = {URL} />
            </form>
        </main>
    )
}