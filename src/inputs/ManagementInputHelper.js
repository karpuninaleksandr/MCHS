export default function ManagementInput(props) {
    if (props.call == undefined) return <p>NULL</p>
    else return <p>{props.call.id}</p>
}