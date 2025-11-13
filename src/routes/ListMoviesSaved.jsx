import './ListMovies.css'
import ContOptions from '../assets/ContOptions'
import { useSelector } from 'react-redux'
import { FaRegCirclePlay } from 'react-icons/fa6'
import Header from '../header/Header'

const ListMoviesSaved = () => {

 const moviesSaved = useSelector((state) => state.movies?.saved ?? [])
  
  return (
    <div className='movies-saved-conteiner'>
      <div className='div-conteiner'>
        <div className='header-div'>
          <Header/>
        </div>
        <div className='side-bar-div'>
          <ContOptions/>
        </div>
        {moviesSaved.length == 0 ? 
        (<p>carregando...</p>) 
        :
        (        
          <div className="movies-saved-body">
              {moviesSaved.map(filme => (
                  <div className="movies" key={filme.id} style={{height : "300px"}}>
                      <img className="movies-img" style={{ maxWidth : "200px" }} src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt={filme.title} />
                      <button onClick={() => navigate(`/filme/${filme.id}`)} className='button-saved'><FaRegCirclePlay className='img-button-saved' style={{fontSize : "20px"}}/></button>
                  </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ListMoviesSaved
