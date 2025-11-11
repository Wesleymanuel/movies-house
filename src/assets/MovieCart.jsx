import { FaRegCirclePlay } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
import './Movies.css'

const MovieCart = ({filmes}) => {

    const navigate = useNavigate()

  return (
    <div className="conteiner-movies">
        {filmes.map(filme => (
            <div className='movies' key={filme.id}>
                <img className="movies-img" src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt={filme.title} />
                <button onClick={() => navigate(`/filme/${filme.id}`)} className='button'><FaRegCirclePlay className='img-button'/></button>
            </div>
        ))}
    </div>
  )
}

export default MovieCart
