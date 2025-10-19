import axios from "axios"
import { useState,useEffect } from "react" 
import Table from "../assets/Table"


const Seach = () => {

    const api_url = import.meta.env.VITE_API_URL
    const api_key = import.meta.env.VITE_API_KEY

    const [movieTitle, setMovietitle] = useState([])
    const [query, setQuery] = useState('')

    const movieTitleUrl = async (url) => {
        try{
            const res = await axios.get(url)
            setMovietitle(res.data.results || [])
        }catch(error){
            console.log(error)
        }
    }


    useEffect(() => {
        if(query == ''){
            const url = `${api_url}/movie/popular?api_key=${api_key}&language=pt-BR&page=1`
            movieTitleUrl(url)
        }
        else{
            const url = `${api_url}/search/movie?api_key=${api_key}&query=${query}&language=pt-BR&page=1`
            movieTitleUrl(url)
        }
        
    },[query])

    const handleLetterClick = (letra) => {
        console.log(letra)
         setQuery((prev) => prev + letra)
    }
   

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-dvh bg-black text-white">
        <div className="row-span-4 col-span-2 flex flex-col items-center justify-center gap-4">
            <div className="text-white text-xl">{query}</div>
            <Table onLetterClick={handleLetterClick} />
        </div>

        <div className="row-span-4 col-span-2 overflow-y-auto p-4">
            {movieTitle.map((titleMovie) => (
            <div key={titleMovie.id} className="mb-3 border-b border-gray-600 pb-2">
                <h1>{titleMovie.title}</h1>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Seach