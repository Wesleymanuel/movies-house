import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/Store.js'
import InitialPage from './initialPage.jsx'
import Login from './routes/Login.jsx'
import ShowFilms from './routes/ShowFilms.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<InitialPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<App/>}/>
          <Route path='/filme/:id' element={<ShowFilms/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
