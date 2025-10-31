import './Buttons.css'
import { useNavigate } from 'react-router-dom'


const Buttons = () => {

  const navigate = useNavigate()

  const navegacao = (value) => {
    let filmValue = 0
    switch (value){
      case 'comedia':
        filmValue = 35;
        break;
      case 'drama':
        filmValue = 18;
        break;
      case 'ficao':
        filmValue = 878;
        break;
      case 'aventura':
        filmValue = 12;
        break;
      case 'animacao':
        filmValue = 16;
        break;
      default :
        console.log("erro")
    }

    navigate('/topc' ,{ state: { tipo: filmValue , valor : value}})
  }

  return (
    <div className='buttons-conteiner flex gap-4 justify-between'>
        <button onClick={() => navegacao('comedia')} className=' bg-transparent border-none text-blue-600 w-[100px] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Comedia</button>
        <button onClick={() => navegacao('drama')}  className=' bg-transparent border-none text-blue-600 w-[100px] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Drama</button>
        <button onClick={() => navegacao('ficao')} className=' bg-transparent border-none text-blue-600 w-[100px]border-2 hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Ficção científica</button>
        <button onClick={() => navegacao('aventura')} className=' bg-transparent border-none text-blue-600 w-[100px] border-2 hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Aventura</button>
        <button onClick={() => navegacao('animacao')} className=' bg-transparent border-none text-blue-600 w-[100px] border-2  hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Animaçãp</button>
    </div>
  )
}

export default Buttons