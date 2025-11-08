import React from 'react'
import RomaceFilms from '../movies/RomaceFilms'
import TerrorMovies from '../movies/TerrorMovies'
import Api from '../api/Api'

const Movies = () => {
  return (
    <div style={{zIndex : "1", marginLeft: "60px"}}>
        <RomaceFilms className="romance"/>
        <Api className="api"/>
        <TerrorMovies className="terror"/>
    </div>
  )
}

export default Movies