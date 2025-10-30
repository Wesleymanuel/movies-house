import './Header.css'
import Buttons from '../assets/Buttons.jsx'
import { MdOutlineCameraIndoor } from 'react-icons/md'
import { IoPersonCircleSharp } from "react-icons/io5"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='conteiner'>
        <nav className='header'>
            <div className='w-[5%] flex justify-center itens-center'>
              <Link to={'/home'}>
                <MdOutlineCameraIndoor className='logo-header'/>
              </Link>
            </div>
            <div className='w-[55%]'><Buttons/></div>
            <div className='opcoes'>
              <IoPersonCircleSharp style={{ fontSize : "40px"}} />
            </div>
        </nav>
    </div>
  )
}

export default Header