import ManagementOutput from "../inputs/ManagementOutputHelper"

export default function ManagementAccordion(props) {
    return (
        <div className = "management_accordion">
            <ManagementOutput updateCall = {props.updateCall} />
        </div>
    )
}