import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../card/Card'

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=0e08f7d9f174cc3bb0842720cfdd3eb3&language=en-US`).then(res => res.json()).then(data => setMovieList(data.results))
    },[type])    
    

  return (
    <div className="movie__list">
        <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
        <div className="list__cards">
            {
                movieList.map(movie => (
                    <Card movie={movie}/>
                ))
            }
        </div>
    </div>
  )
}

export default MovieList