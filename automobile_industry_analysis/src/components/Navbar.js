import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { BsPenFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        marginTop: "50px"
    },
    btns: {
        '& > *': {
            margin: theme.spacing(1),
        },
        marginTop: "40px"
    }
}));

function Navbar() {
    const classes = useStyles();
    return (
        <div className='nav'>
            <Typography variant="h4" component="h4">
                Automobile Industry Analysis
            </Typography>
            <div className='fake-buttons'>
                <button type='button' className='invisible'><BsPenFill /></button>
                <button type='button' className='invisible'><AiFillHome /></button>
                <button type='button' className='invisible'><FiSettings /></button>
            </div>
        </div>
    )
}
export default Navbar;