import './CSS/Row.css'
function Row(props){
    // console.log(props)
    if(props.label == 'None'){
        return(
            <div></div>
        )
    }
    return(
        <div className="row">
            <div className="key">{props.label}-</div>
            <div className="value">{props.value}</div>
        </div>
    )
}
export default Row