import { useParams } from "react-router-dom" 
import { useState, useEffect} from "react"
import axios from "axios"
import { FaStar } from 'react-icons/fa'

function ShowFilms() {

    const api_url = import.meta.env.VITE_API_URL
    const api_key = import.meta.env.VITE_API_KEY

    const [movie, setMovie] = useState(null)

    const { id } = useParams()

        const individualMovie = async (url) => {
        axios.get(url)
        .then((res) => {
            console.log("certo")
            setMovie(res.data)
        }).catch((error) => {
            console.log(error)
        }) 
    }

    useEffect(() => {
        const movieUrl = `${api_url}/movie/${id}?api_key=${api_key}&language=pt-BR&page=1`
        individualMovie(movieUrl)
    },[id])
 
  return (
    <div className="h-dvh  bg-black">
        {movie ? (
        <div>
        <img
          className="w-[60%] h-[60%] mt-5 rounded-lg mb-3"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
        <p className="text-white text-center text-lg font-semibold mb-3 flex items-center gap-2"><FaStar/>aldiencia{movie.popularity}</p>
        <p className="text-white text-center text-lg font-semibold mb-3">
          {movie.title}
        </p>
        </div>) : <p>carregando...</p>  }
        </div>
  )
}

export default ShowFilms