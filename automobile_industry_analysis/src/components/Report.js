import './Report.css'
import Info from './Info.js'
function Report(props){
    console.log(props)
    return(
        <div className='container'>
            {props.report}
            <div className='card'>
                <div className='description'>
                    {props.description}
                </div>
                <div className='info'>
                    <Info {...props}/>
                </div>
            </div>
        </div>
    )
}
export default Report