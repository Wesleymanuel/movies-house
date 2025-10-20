import React from 'react'

const Buttons = () => {
  return (
    <div className='flex gap-4 justify-center'>
        <button className='text-white border-double border-white border-2 w-[6%] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Comedia</button>
        <button className='text-white border-double border-white border-2 w-[6%] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Drama</button>
        <button className='text-white border-double border-white border-2 w-[6%] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Ficção científica</button>
        <button className='text-white border-double border-white border-2 w-[6%] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Aventura</button>
        <button className='text-white border-double border-white border-2 w-[6%] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>Animaçãp</button>
    </div>
  )
}

export default Buttons