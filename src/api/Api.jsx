import axios from 'axios'
import { useState,useEffect } from 'react'
import MovieCart from '../assets/MovieCart';

const Api = () => {

    const api_url = import.meta.env.VITE_API_URL
    const api_key = import.meta.env.VITE_API_KEY

    const [filmes, setFilmes] = useState([])
    const [filmes2, setFilmes2] = useState([])
    const [filmes3, setFilmes3] = useState([])

    const renderApi = async () => {
        try{
            const res = await axios.get(`${api_url}/movie/popular?api_key=${api_key}&language=pt-BR&page=1`)
            console.log(res.data.results)
            setFilmes(res.data.results || [])
            const res2 = await axios.get(`${api_url}/discover/movie?api_key=${api_key}&with_genres=10749&language=pt-BR`)
            console.log(res2.data.results)
            setFilmes2(res2.data.results || [])
            const res3 = await axios.get(`${api_url}/discover/movie?api_key=${api_key}&with_genres=27&language=pt-BR`)
            console.log(res3.data.results)
            setFilmes3(res3.data.results || [])
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        renderApi()
    }, [])

  return (
     <div style={{marginLeft: "10px"}}>
    {(filmes && filmes2 && filmes3) ? 
    (   
    <div>   
        <h1 className="movies-types">Romances</h1>
        <MovieCart filmes={filmes2}/>
        <h1 className="movies-types">Filmes mais procurados</h1>
        <MovieCart filmes={filmes}/>
        <h1 className="movies-types">Terror</h1>
        <MovieCart filmes={filmes3}/>
    </div>
    ) 
    :
    (
    <p>carregando...</p>)}
    </div>
);    


}

export default Api