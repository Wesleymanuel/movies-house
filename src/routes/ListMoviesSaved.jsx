import './ListMovies.css'
import ContOptions from '../assets/ContOptions'
import { useSelector } from 'react-redux'

const ListMoviesSaved = () => {

 const moviesSaved = useSelector((state) => state.movies?.saved ?? [])
  

  return (
    <div>
      {moviesSaved.length == 0 ? (<p>carregando...</p>) : (        <div className="conteiner-movies">
            {moviesSaved.map(filme => (
                <div className="movies" key={filme.id}>
                    <img className="movies-img" style={{ maxWidth : "200px" }} src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt={filme.title} />
                    <button onClick={() => navigate(`/filme/${filme.id}`)} className='button'><FaRegCirclePlay className='img-button'/></button>
                </div>
            ))}
        </div>)}

    </div>
  )
}

export default ListMoviesSaved