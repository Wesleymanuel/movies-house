import { useState,useEffect } from "react"
import axios from 'axios'

const ButtobFilmes = () => {

    const api_url = import.meta.env.VITE_API_URL
    const api_key = import.meta.env.VITE_API_KEY

    const [typeFilme, setTypeFilmes] = useState([])

    const typeFilmes =  async (url) => {
        try{
            const res = await axios.get(url)
            setTypeFilmes(res.data)
        }catch{
            console.log(error)
        }
    }

    useEffect(() => {
        url = `${api_url}/discover/movie?api_key=${api_key}&with_genres=${type}&language=pt-BR`
        typeFilmes(url)
    },[type])


  return (
    <div>

    </div>
  )
}

export default ButtobFilmes