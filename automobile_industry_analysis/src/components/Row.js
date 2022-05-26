import './CSS/Row.css'
function Row(props){
    return(
        // render the key value pair for the legend
        <div className="row">
            <div className="key">{props.label}-</div>
            <div className="value">{props.value}</div>
        </div>
    )
}
export default Row