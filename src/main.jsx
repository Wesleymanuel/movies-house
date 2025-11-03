import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/Store.js'
import InitialPage from './InitialPage.jsx'
import Login from './routes/Login.jsx'
import ShowFilms from './routes/ShowFilms.jsx'
import Seach from './routes/Seach.jsx'
import TopicMovies from './routes/TopicMovies.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter basename="/movies-house">
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<InitialPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path='/home' element={<App/>}/>
              <Route path='/filme/:id' element={<ShowFilms/>}/>
              <Route path='/search' element={<Seach/>}/>
              <Route path='/topc' element={<TopicMovies/>}/>
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
