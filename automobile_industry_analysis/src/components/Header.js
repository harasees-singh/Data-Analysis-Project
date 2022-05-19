import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import robot1 from '../assets/robot-finding-data.svg'
import robot2 from '../assets/robot-doing-data-analysis.svg'
import vector from '../assets/tribe.jpg'
function Header() {
    return (
        <div className='head'>
            <div className='header-text'>

                <div className='vectors'>
                    <img className='svg' src={vector} alt="svg" />
                    {/* <img className='svg' src={robot2} alt="queen" /> */}
                    <div className='typography'>
                        <Typography variant="h3" component="h4">
                            this is our insanely valuable dataset it consists of data of 200 something cars and u will be blown away
                            by the amount of information it holds.
                        </Typography>
                        <div className='buttons'>
                            <Button variant="contained" color="primary" className='buttons-dataset'
                                href="https://1drv.ms/x/s!AkSxQvIzIp7WkYwOehfepRWpe56ZTQ?e=G2KtMA">
                                Data Set
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;