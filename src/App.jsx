import Header from './header/Header'
import './App.css'
import ContOptions from './assets/ContOptions'
import Movies from '../src/movies/Movies'

function App() {

  return (
    <div className='app-conteiner'>
      <Header className="header"/>
      <ContOptions/>
      <Movies/>
    </div>
  )
}

export default App

