import { ReactElement, useEffect, useRef } from "react";

type props = {
    sectionId : string
    ImageSrc : string,
    text : string
}

export const Section = ({sectionId,ImageSrc,text} : props):ReactElement =>{
    const paragraphObserver : any = useRef(null)
    const imageObserver : any = useRef(null)
    const paragraph  = useRef<HTMLParagraphElement>(null)
    const imageContainer : React.MutableRefObject<null> = useRef(null)

    useEffect(() =>{
         
        if(paragraph.current){
            paragraphObserver.current = new IntersectionObserver((entries : any[]) =>{
                entries.forEach(entry =>{
                    entry.target.classList.toggle('showParagraph',entry.isIntersecting)
                    if(entry.isIntersecting) paragraphObserver.current.unobserve(entry.target)
                })
             })
             paragraphObserver.current.observe(paragraph.current)
        }

          if(imageContainer.current){
            
         imageObserver.current = new IntersectionObserver((entries : any[]) =>{
            entries.forEach(entry =>{
                entry.target.classList.toggle('showImageContainer',entry.isIntersecting)
                if(entry.isIntersecting) imageObserver.current.unobserve(entry.target)
            })
         })
         imageObserver.current.observe(imageContainer.current)
          }


         return() =>{
            paragraphObserver.current.disconnect()
            imageObserver.current.disconnect()
         }

    },[])
   
    return(
        <section id={sectionId}>
               <p  ref={paragraph}>{text}</p>
                    <div ref={imageContainer} className="imageContainer">
                        <img src={ImageSrc} alt={ImageSrc} />
                    </div>
                
        </section>
    )
}