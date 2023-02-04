import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export const FooterIcon = ({icon} : any) : ReactElement =>{
    return(
        <li>
            <i className="footerIcon">
           <FontAwesomeIcon icon = {icon} />
            </i>
        </li>
    )
}