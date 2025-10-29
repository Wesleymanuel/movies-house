import './Buttons.css'

const Buttons = () => {
  return (
    <div className='buttons-conteiner flex gap-4 justify-between'>
        <button className=' bg-transparent border-none text-blue-600 w-[100px] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Comedia</button>
        <button className=' bg-transparent border-none text-blue-600 w-[100px] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Drama</button>
        <button className=' bg-transparent border-none text-blue-600 w-[100px]border-2 hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Ficção científica</button>
        <button className=' bg-transparent border-none text-blue-600 w-[100px] border-2 hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Aventura</button>
        <button className=' bg-transparent border-none text-blue-600 w-[100px] border-2  hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Animaçãp</button>
    </div>
  )
}

export default Buttons