import { BsPenFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import "./CSS/Navbar.css"

function Navbar() {
    return (
        <div className='nav'>
            <div>
                Analysis Of The Automobile Industry
            </div>
            <div className='fake-buttons'>
                <button type='button' className='invisible'><BsPenFill /></button>
                <button type='button' className='invisible'><AiFillHome /></button>
                <button type='button' className='invisible'><FiSettings /></button>
            </div>
        </div>
    )
}
export default Navbar;