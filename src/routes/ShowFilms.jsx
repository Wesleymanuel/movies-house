import { useLocation } from "react-router-dom"
import { useState, useEffect} from "react"
import axios from "axios"

function ShowFilms() {

    const location =useLocation()
    const { id } = location.state || {}
    const [show, setShow] = useState(null)

    const api_url = import.meta.env.VITE_API_URL
    const api_key = import.meta.env.VITE_API_KEY

    useEffect(() => {
        if(id){
            const filmsTime = async () => {
                try{
                    const res = axios.get(`${api_url}/movie/${id}?api_key=${api_key}&language=pt-BR`)
                    setShow((await res).data.results)
                }catch(error){
                    console.log(error)
                }
            }
        }
        
    }, [id])
 
  return (
    <div>ShowFilms</div>
  )
}

export default ShowFilms