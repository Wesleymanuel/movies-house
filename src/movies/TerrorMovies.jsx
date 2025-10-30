import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { FaRegCirclePlay } from "react-icons/fa6";
import '../api/Api.css'

const TerrorMovies = () => {

    const api_url = import.meta.env.VITE_API_URL
    const api_key = import.meta.env.VITE_API_KEY

    const [filmes, setFilmes] = useState([])
    const navigate = useNavigate()

    const renderApi = async () => {
        try{
            const res = await axios.get(`${api_url}/discover/movie?api_key=${api_key}&with_genres=27&language=pt-BR`)
            console.log(res.data.results)
            setFilmes(res.data.results || [])
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        renderApi()
    }, [])


  return (
    <div>
        <h1 className="movies-types">Terror</h1>
        <div className="conteiner-movies">
            {filmes.map(filme => (
                <div className="movies" key={filme.id}>
                    <img className="movies-img" style={{ maxWidth : "200px" }} src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt={filme.title} />
                    <button onClick={() => navigate(`/filme/${filme.id}`)} className='button'><FaRegCirclePlay className='img-button'/></button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TerrorMovies;