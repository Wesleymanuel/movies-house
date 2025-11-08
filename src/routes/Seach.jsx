import axios from "axios"
import { useState,useEffect } from "react" 
import Table from "../assets/Table"
import './Search.css'
import ContOptions from '../assets/ContOptions'


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
    <div className="search-conteiner">
        <ContOptions/>
        <div className="table-conteiner">
            <div className="texto">{query}</div>
            <Table onLetterClick={handleLetterClick} />
        </div>

        <div className="title-movies">
            {movieTitle.map((titleMovie) => (
            <div key={titleMovie.id} className="movies">
                <p>{titleMovie.title}</p>
            </div>
            ))}
        </div>
    </div>
  )

}

export default Seach