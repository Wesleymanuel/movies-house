import { MdOutlineCameraIndoor } from 'react-icons/md'
import { GrAddCircle } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const InitialPage = () => {
  return (
    <main className='h-dvh p-0 m-0 box-border flex flex-col w-[24%] items-start'>
        <nav className='h-full flex flex-col justify-center w-full bg-yellow-400 gap-[20px]'>
          <div className='flex flex-row justify-center h-[20%] flex-wrap'>
            <div className='h-[50%] flex flex-row w-[100%] justify-center items-center'><MdOutlineCameraIndoor className='h-full w-auto'/></div>
            <h1 className='h-[40%] text-[25px]'>movies-house</h1>
          </div>
            <div className='flex flex-col justify-start items-center w-full h-[20%] gap-4'>
              <input
                type='text'
                placeholder='xxxxxxxx@gmail.com'
                className='h-8 w-[75%] border border-solid px-2 rounded-md'
              />
              <input
                type='text'
                placeholder=''
                className='h-8 w-[75%] border border-solid px-2 rounded-md'
              />
              <div className="w-[75%] flex justify-start">
                <Link to={'/login'}><GrAddCircle className="cursor-pointer text-2xl" /></Link>
              </div>
            </div>
        </nav>
    </main>
  )
}

export default InitialPage