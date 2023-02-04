import { MutableRefObject, ReactElement,MouseEvent, useRef } from "react";
import {useNavigate} from 'react-router-dom'
import { getTheArrWithInputs } from "./Ingredient";
import { ApiRequest } from "./helpers/ApiRequest";




export const SubmitButton = ({URL,submitButtonAriaLabel} : any) : ReactElement =>{

    const arrWithInputs : MutableRefObject<null>[] = getTheArrWithInputs()
    const modal : any = useRef(null)
    const navigate = useNavigate()


    

    const handleSubmit = (e : MouseEvent) =>  {

    e.preventDefault()
       const body = arrWithInputs.map((el : MutableRefObject<null> | any) => {
           if(el.current.checked) return el.current.name
       })


        type optionsObject = {
       method : string
       headers : {"Content-type" : "application/json" }
       body : string
    }
      
      
       const postOptions : optionsObject = {
            method : 'Post',
            headers : {"Content-type" : "application/json" },
            body : JSON.stringify(body)
       }

       ApiRequest(URL,postOptions)
       
       arrWithInputs.forEach((el : MutableRefObject<null> | any) => {if(el.current.checked) el.current.checked = false} )
       arrWithInputs.length = 0

       window.scrollTo({
        top : 0  as number,
        behavior : "smooth" as ScrollBehavior
       })
         

       modal.current.showModal()
       
    }

    const handleCloseButton = () =>{
      
       

       modal.current.setAttribute('closing','')
       modal.current.addEventListener('animationend',() =>{
         modal.current.removeAttribute('closing')
         modal.current.close()
       },{once : true})
 
       setTimeout(() => {
       navigate('/')
       }, 1000);
    }

    
    
    return (
       
       <>
       <button className="button open-button" onClick={(e) => handleSubmit(e)} aria-label={submitButtonAriaLabel} type="submit">
    🚀 Send my order 🚀 </button>
        <dialog ref={modal} id="dialog" >
         <div> <p> <i className="rocket">🚀</i>  Order sent successfully and on the way !  <i className="rocket">🚀</i></p></div>
          <button onClick={handleCloseButton} type="button" aria-label="Close dialog " className="button close-button">Cheers!</button>
        </dialog>
       </>
       
    )
}