import ManagementGet from "../inputs/ManagementGetHelper"
import ManagementInput from "../inputs/ManagementInputHelper"

export default function ManagementRightAccordion(props) {
    return (
        <div className = "management_right_accordion">
            <ManagementInput call = {props.call}/>
            <br></br>
            <p>Доступные работники</p>
            <ManagementGet/>
        </div>
    )
}