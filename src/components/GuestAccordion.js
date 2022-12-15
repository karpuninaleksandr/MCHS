import GuestInput from "../inputs/GuestInputHelper"

export default function Accordion(props) {
    return (
        <div className = "guest_accordion">
            <GuestInput coordX = {props.coordX} coordY = {props.coordY}/>
        </div>
    )
}