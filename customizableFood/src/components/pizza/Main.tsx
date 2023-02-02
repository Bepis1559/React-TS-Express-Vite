import { ReactElement,useRef,useEffect } from "react"
import {  Ingredient } from "./Ingredient"
import {v4 as uuidv4} from 'uuid'
import { getIngredients } from "./helpers/Ingredients"
import { generateStartAndEnd } from "./helpers/StartAndEnd"
import { SubmitButton } from "./SubmitButton"




export const Main = () : ReactElement =>{
    const rows = useRef<HTMLDivElement[]>([])
    const observer : any = useRef(null)

    useEffect(() =>{
        observer.current = new IntersectionObserver((entries : any[]) =>{
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
        <main id="pizzaMain">
            <header id="pizzaHeader"><h1 id="pizzaH1">Style your pizza in your own way</h1></header>
            <form method="post" id="pizzaForm">      


            {points.map((el : twoPoints , index : number ) : ReactElement => 
            <div  
            key={uuidv4()} 
            className="row"
            ref={(rowReference : HTMLDivElement) => (rows.current[index] = rowReference)}
            > 

            {getIngredients(el.start,el.end).map((el: string) : ReactElement =>
            <Ingredient   key = {uuidv4()} name = {el} />)}

            </div> )}



               <SubmitButton />
            </form>
        </main>
    )
}