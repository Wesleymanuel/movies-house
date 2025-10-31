import Header from './header/Header'
import Api from './api/Api'
import './App.css'
import RomaceFilms from './movies/RomaceFilms'
import TerrorMovies from './movies/TerrorMovies'
import ContOptions from './assets/ContOptions'

function App() {

  return (
    <div className='app-conteiner'>
      <Header/>
      <RomaceFilms/>
      <Api/>
      <TerrorMovies/>
    </div>
  )
}

export default App
