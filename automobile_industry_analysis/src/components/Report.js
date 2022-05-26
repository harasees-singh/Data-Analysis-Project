import './CSS/Report.css'
import Info from './Info.js'
function Report(props){
    return(
        <div className='container'>
            {/* render the power BI report */}
            {props.report}
            <div className='card'>
                <div className='description'>
                    {/* render the description of the report */}
                    <div className='description_content'>{props.description}</div>
                </div>
                <div className='info'>
                    {/* render the info in the slider by passing props to the Info component */}
                    <Info key={props.report} {...props}/>
                </div>
            </div>
        </div>
    )
}
export default Report