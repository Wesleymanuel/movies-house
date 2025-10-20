import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { FaRegCirclePlay } from "react-icons/fa6";

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
    <div className="mt-10">
        <h1 className="text-white h-10 font-mono text-lg">Terror</h1>
        <div className="flex gap-4 overflow-x-auto scrollbar-hidden px-4">
            {filmes.map(filme => (
                <div className="relative" key={filme.id}>
                    <img className="min-w-[100px] md:min-w-[150px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg" src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt={filme.title} />
                    <button onClick={() => navigate(`/filme/${filme.id}`)} className='absolute bottom-3 left-3'><FaRegCirclePlay className='size-10 text-white'/></button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TerrorMovies;