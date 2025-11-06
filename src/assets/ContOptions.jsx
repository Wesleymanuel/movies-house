import { IoPersonCircleSharp } from "react-icons/io5"
import { FaMicrochip } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { PiListStarFill } from "react-icons/pi";
import './Cont.css'

const ContOptions = () => {

  return (
    <div className="cont-conteiner">
        <div className="option-films">
            <div className="filmes-options">
                <FaMicrochip className="icons"/>
            </div>
            <div className="filmes-options">
                <FaMoneyCheckDollar className="icons"/>
            </div>
            <div className="filmes-options">
                <SlLike className="icons"/>
            </div>
            <div className="filmes-options">
                <PiListStarFill className="icons"/>
            </div>
        </div>
    </div>
  )
}

export default ContOptions

{/*        <div className="cont-image">
            <IoPersonCircleSharp/>
        </div> */}