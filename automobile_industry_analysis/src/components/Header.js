import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import robot1 from '../assets/robot-finding-data.svg'
// import robot2 from '../assets/robot-doing-data-analysis.svg'
import "./CSS/Header.css"
import top from '../assets/images/final_top.jpg'
function Header() {
    return (
        <div className='head'>

            <div className='vectors'>
                <div className='photos'>
                    <img className='vectors-top' src={top} alt="svg" />
                </div>

                <div className='typography'>
                    <Typography variant="h4" component="h4">
                        Welcome to a detailed data analysis of the automobile industry, equipped with industry leading tools like Power BI, Machine Learning and more !
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
    )
}
export default Header;