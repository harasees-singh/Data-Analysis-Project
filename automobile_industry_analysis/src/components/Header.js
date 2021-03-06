import Button from '@material-ui/core/Button';
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
                    <div>
                        Welcome to a detailed data analysis of the automobile industry, equipped with industry leading tools like Power BI, Machine Learning and more !
                    </div>
                    <div className='buttons'>
                        <Button variant="contained" color="primary" className='buttons-dataset'
                            // link to the data set used in the project
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