import { ReactElement } from "react";

import { faFacebook, faTwitter, faWhatsapp, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FooterIcon } from "./FooterIcon";


export const Footer = () : ReactElement =>{
    return(
        <footer>
            <ul>
               <FooterIcon icon = {faFacebook}/>
               <FooterIcon icon = {faTwitter}/>
               <FooterIcon icon = {faLinkedin}/>
               <FooterIcon icon = {faWhatsapp}/>
               <FooterIcon icon = {faInstagram}/>
            </ul>
        </footer>
    )
}