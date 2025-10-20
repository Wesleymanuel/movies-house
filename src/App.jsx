import Header from './header/Header'
import Api from './api/Api'
import RomaceFilms from './movies/RomaceFilms'
import TerrorMovies from './movies/TerrorMovies'
import Buttons from './assets/Buttons'

function App() {

  return (
    <div className='flex flex-col gap-10 h-[100%] bg-black'>
      <Header/>
      <Buttons/>
      <RomaceFilms/>
      <Api/>
      <TerrorMovies/>
    </div>
  )
}

export default App
