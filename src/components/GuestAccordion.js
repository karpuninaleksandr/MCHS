import GuestInput from "../inputs/GuestInputHelper"
import Recommendations from '../inputs/Recommendations'
import { useState } from "react"

export default function Accordion(props) {   
    const[formSend, setFormSend] = useState(true)
    const[reasonСall, setReasonСall] = useState(true)
    return (
        <div className = "guest_accordion">
            {
                formSend ?
                    <GuestInput 
                        coordX = { props.coordX } 
                        coordY = { props.coordY }
                        updateReasonCall = { setReasonСall }
                        updateFormSend = { setFormSend }
                    />
                : <Recommendations reasonСall = { reasonСall } />
            }
        </div>
    )
}