import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react'; 
import '../api/Api.css'
import { FaRegCirclePlay } from 'react-icons/fa6'
import Header from '../header/Header';

const TopicMovies = () => {

    const api_url = import.meta.env.VITE_API_URL
    const api_key = import.meta.env.VITE_API_KEY

    const navigate = useNavigate()

    const [movies, setMovies] = useState([])

    const location = useLocation()
    const {tipo, valor} = location.state || {}

    const typeApi = async (url) => {
        try{
           const res = await axios.get(url)
           console.log(res.data.results)
           setMovies(res.data.results || [])
        }
        catch(erro){
        console.log(erro)
    }   
    }

    useEffect(() => {
        const apiUrl = `${api_url}/discover/movie?api_key=${api_key}&with_genres=${tipo}&language=pt-BR`
        typeApi(apiUrl)
    },[tipo])

    console.log(valor)

  return (
    <div style={{background : 'black' , height : "100%"}}>
        <Header/>
        <h1 className="movies-types" style={{ marginTop : "10px"}}>{valor}</h1>
        <div className="conteiner-movies" style={{ display : "flex" , flexWrap: "wrap"}}>
            {movies.map(filme => (
                <div className="movies" style={{paddingTop : "15px"}} key={filme.id}>
                    <img className="movies-img" style={{ maxWidth : "200px" }} src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt={filme.title} />
                    <button onClick={() => navigate(`/filme/${filme.id}`)} className='button'><FaRegCirclePlay className='img-button'/></button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopicMovies