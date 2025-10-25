import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { FaRegCirclePlay } from "react-icons/fa6";

const RomaceFilms = () => {

    const api_url = import.meta.env.VITE_API_URL
    const api_key = import.meta.env.VITE_API_KEY

    const [filmes, setFilmes] = useState([])
    const navigate = useNavigate()

    const renderApi = async () => {
        try{
            const res = await axios.get(`${api_url}/discover/movie?api_key=${api_key}&with_genres=10749&language=pt-BR`)
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
        <h1 className="text-white h-10 font-mono text-lg">Romances</h1>
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

 {/* <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4">
    {filmes.map((filme) => (
      <div
        key={filme.id}
        className="flex flex-col items-center justify-center bg-neutral-950 rounded-xl w-80 overflow-hidden shadow-md p-4"
      >
        <img
          className="w-[60%] h-[60%] mt-5 rounded-lg mb-3"
          src={`https://image.tmdb.org/t/p/w200${filme.poster_path}`}
          alt={filme.title}
        />
        <p className="text-white text-center text-lg font-semibold mb-3 flex items-center gap-2">aldiencia{filme.popularity}</p>
        <p className="text-white text-center text-lg font-semibold mb-3">
          {filme.title}
        </p>
        <button onClick= className="px-5 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 w-[30%] transition-all">
            Assistir
        </button>
      </div>
    ))}
  </div>*/}
export default RomaceFilms