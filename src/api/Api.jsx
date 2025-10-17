import axios from 'axios'
import { useState,useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Api = () => {

    const api_url = import.meta.env.VITE_API_URL
    const api_key = import.meta.env.VITE_API_KEY

    const [filmes, setFilmes] = useState([])
    const navigate = useNavigate()

    const renderApi = async () => {
        try{
            const res = await axios.get(`${api_url}/movie/popular?api_key=${api_key}&language=pt-BR&page=1`)
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
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center bg-black p-6">
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
        <p className="text-white text-center text-lg font-semibold mb-3 flex items-center gap-2"><FaStar/>aldiencia{filme.popularity}</p>
        <p className="text-white text-center text-lg font-semibold mb-3">
          {filme.title}
        </p>
        {/*<Button id={filme.id}/>*/}
        <button onClick={() => navigate(`/filme/${filme.id}`)} className="px-5 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 w-[30%] transition-all">
            Assistir
        </button>
      </div>
    ))}
  </div>
);


}

export default Api