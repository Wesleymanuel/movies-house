import { IoPersonCircleSharp } from "react-icons/io5"
import { FaMicrochip } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { PiListStarFill } from "react-icons/pi";
import './Cont.css'
import { useState } from "react";
import { Link } from "react-router-dom";

const ContOptions = () => {

    const [ativo,setAtivo] = useState(false)

  return (
    <div 
      className={`cont-conteiner ${ativo ? "ativo" : ""}`}
      onMouseEnter={() => setAtivo(true)}
      onMouseLeave={() => setAtivo(false)}
    >
    {ativo ? 
    ( 
    <div className="filmes-options">
        <IoPersonCircleSharp className="icons" />
        {ativo && <p>Conta</p>}
    </div>
    ) 
    :
    ''}
      <div className="filmes-options">
        <Link to={'/saved'}>
          <FaMicrochip className="icons" />
        </Link>
        {ativo && <p>IA</p>}
      </div>

      <div className="filmes-options">
        <FaMoneyCheckDollar className="icons" />
        {ativo && <p>Alugados</p>}
      </div>

      <div className="filmes-options">
        <SlLike className="icons" />
        {ativo && <p>Gostou</p>}
      </div>

      <div className="filmes-options">
        <PiListStarFill className="icons" />
        {ativo && <p>Lista</p>}
      </div>
    </div>
  );
}


export default ContOptions