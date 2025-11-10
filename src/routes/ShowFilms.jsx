import { useParams } from "react-router-dom" 
import { useState, useEffect, useReducer} from "react"
import axios from "axios"
import { FaStar, FaPlus } from 'react-icons/fa'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { FaPlay } from "react-icons/fa"
import {  GrInstallOption } from 'react-icons/gr'
import { BiSolidMoviePlay } from "react-icons/bi"
import { useDispatch} from "react-redux"
import { addMovie } from "../features/MoviesSlice"



function ShowFilms() {

    const api_url = import.meta.env.VITE_API_URL
    const api_key = import.meta.env.VITE_API_KEY

    const dispatch = useDispatch()

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

    const savingMuvies = (movies) => {
        console.log(movies)
        dispatch(addMovie(movies))
    }



 
  return (
    <div className="h-dvh grid grid-cols-3 grid-rows-4 bg-black">
        {movie ? (
        <>
        <img
          className="w-full h-full object-cover col-start-1 col-end-2 row-start-1 row-end-5"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="col-start-2 col-end-4  h-[100%] flex justify-center items-center">
            <p className="text-white text-center text-lg font-semibold mb-3">
            {movie.title}
            </p>
        </div>
        <div className="text-white col-start-2 col-end-4 row-start-2 row-end-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem doloremque, optio asperiores et maiores nemo nulla voluptate voluptatibus inventore doloribus ex quam dolores eius. Recusandae rerum fugit architecto molestias.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit commodi accusamus minus earum, unde cum temporibus, alias excepturi deleniti assumenda explicabo doloremque saepe dignissimos, corporis exercitationem! Nihil officiis id libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque accusamus explicabo ratione illo dolore dicta iusto odit. Reprehenderit voluptates inventore consequatur quasi. Officia corrupti ex atque similique consectetur commodi quis.</p>
        </div>

        <div className="col-start-2 col-end-4  row-start-3 row-end-4 flex items-center justify-evenly">
            <div className="text-white flex items-center w-[100px] h-[50px] justify-center outline-solid hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer">
                <FaPlay/>
                <p>Assistir</p>
            </div>
            <div className="text-white flex items-center w-[100px] h-[50px] justify-center outline-solid hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer">
                <GrInstallOption/>
                <p>instalar</p>
            </div>
            </div>
                <div className="border-t-2 border-white col-start-2 col-end-4 row-start-4 row-end-5 flex items-center justify-evenly">
                    <div className="text-white h-[50px] w-[100px] flex flex-col justify-center items-center outline-solid hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer">
                        <BiSolidMoviePlay/>
                        <p>trayler</p>
                    </div>
                    <div className="text-white h-[50px] w-[100px] flex flex-col justify-center items-center outline-solid hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer">
                        <AiFillLike/>
                        <p>gostei</p>
                    </div>
                    <div className="text-white h-[50px] w-[100px] flex flex-col justify-center items-center outline-solid hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer">
                        <AiFillDislike/>
                        <p>nao gostei</p>
                    </div>
                    <div onClick={() => savingMuvies(movie)} className="text-white h-[50px] w-[150px] flex flex-col justify-center items-center outline-solid hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer">
                        <FaPlus/>
                        <p>adicinar a lista</p>
                    </div>
            </div>
        </>) : <p>carregando...</p>  }
        </div>
  )
}

export default ShowFilms