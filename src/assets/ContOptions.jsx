import { IoPersonCircleSharp } from "react-icons/io5"
import { BiMoviePlay } from "react-icons/bi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import './Cont.css'

const ContOptions = () => {
  return (
    <div className="cont-conteiner">
        <div className="cont-image">
            <IoPersonCircleSharp/>
        </div>
        <div>
            <div className="filmes-favoritos">
                <BiMoviePlay/>
                <p>Filmes Favoritos</p>
            </div>
            <div className="filmes-alugados">
                <FaMoneyCheckDollar/>
                <p>Filmes Alugados</p>
            </div>
            <div>
                <SlLike/>
                <p>Filmes Marcados com Gostei</p>
            </div>
        </div>
    </div>
  )
}

export default ContOptions