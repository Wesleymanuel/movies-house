import { IoPersonCircleSharp } from "react-icons/io5"
import { FaMicrochip } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import './Cont.css'
import { MdLogout } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";
import { CiBookmarkPlus } from "react-icons/ci";
import { useState } from "react";

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
    <div className="filmes-options cont">
        <IoPersonCircleSharp className="icons" style={{fontSize:"70px"}}/>
        {ativo && <p>Conta</p>}
    </div>
    ) 
    :
    ''}
    <div className="options-conteiner">
      <div className="filmes-options">
        <FaMicrochip className="icons" />
        {ativo && <p>IA</p>}
      </div>

      <div className="filmes-options">
        <FaMoneyCheckDollar className="icons" />
        {ativo && <p style={{fontSize: "small"}}>Alugados</p>}
      </div>

      <div className="filmes-options">
        <SlLike className="icons" />
        {ativo && <p>Gostou</p>}
      </div>

      <div className="filmes-options">
        <CiBookmarkPlus className="icons" />
        {ativo && <p>Lista</p>}
      </div>
    </div>
    {ativo 
    &&
    <div>
      <div className="filmes-options">
        <MdLogout className="icons" />
        {ativo && <p>Sair</p>}
      </div>
      <div className="filmes-options">
        <LuUserPlus className="icons" />
        {ativo && <p>Conta</p>}
      </div>
    </div>
    }
    </div>
  );
}


export default ContOptions

{/*        <div className="cont-image">
            <IoPersonCircleSharp/>
        </div> */}
