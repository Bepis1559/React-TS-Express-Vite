import  { MutableRefObject, ReactElement, useRef } from "react";


const arrWithInputs : MutableRefObject<null>[] = []
export const getTheArrWithInputs = () => arrWithInputs

export const Ingredient = ({name} : any):ReactElement =>{

    const input = useRef(null)
    const containerForCircle : MutableRefObject<null> | any = useRef(null)
    const handleClickOnContainerForCircle = () =>{
        const circle = document.createElement('span')
        circle.classList.add('circle')
        containerForCircle.current.appendChild(circle)
        setTimeout(() => {
            containerForCircle.current.removeChild(circle)
        }, 800)
    }
    return(
        <span className="inputContainer">
         <span ref={containerForCircle} onClick={handleClickOnContainerForCircle} className="containerForCircle">
        <input ref={input}  onChange={() : number => arrWithInputs.push(input)} type="checkbox" id={name} name={name} />
        </span>
        <label htmlFor={name}>{name}</label>
        </span>
    )
}