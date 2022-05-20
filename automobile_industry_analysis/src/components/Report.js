import './Report.css'
import Info from './Info.js'
function Report(props){
    return(
        <div className='container'>
            {props.report}
            <div className='card'>
                <div className='description'>
                    this is the description
                </div>
                <div className='info'>
                    <Info />
                </div>
            </div>
        </div>
    )
}
export default Report