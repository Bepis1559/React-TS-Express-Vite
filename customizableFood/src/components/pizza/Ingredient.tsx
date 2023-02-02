import  { MutableRefObject, ReactElement, useRef } from "react";


const arrWithInputs : MutableRefObject<null>[] = []
export const getTheArrWithInputs = () => arrWithInputs

export const Ingredient = ({name} : any):ReactElement =>{

    const input = useRef(null)
    return(
        <span className="inputContainer">
        <input ref={input}  onChange={() : number => arrWithInputs.push(input)} type="checkbox" id={name} name={name} />
        <label htmlFor={name}>{name}</label>
        </span>
    )
}