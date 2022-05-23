import './CSS/Report.css'
import Info from './Info.js'
function Report(props){
    return(
        <div className='container'>
            {props.report}
            <div className='card'>
                <div className='description'>
                    <div className='description_content'>{props.description}</div>
                </div>
                <div className='info'>
                    <Info {...props}/>
                </div>
            </div>
        </div>
    )
}
export default Report