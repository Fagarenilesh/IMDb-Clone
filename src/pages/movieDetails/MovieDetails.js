import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./MovieDetails.css"

const MovieDetails = () => {

    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0e08f7d9f174cc3bb0842720cfdd3eb3&language=en-US`).then(res => res.json()).then(data => setMovie(data))
        window.scrollTo(0,0)
    }, [id])

    
  return (
    <div className="movie">
        <div className="movie__intro">
            <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt=""/>
        </div>
        <div className="movie__detail">
            <div className="movie__detailLeft">
                <div className="movie__posterBox">
                    <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt=""/>
                </div>
            </div>
            <div className="movie__detailRight">
                <div className="movie__detailRightTop">
                    <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                    <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                    <div className="movie__rating">
                        {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i className="fas fa-star" />
                        <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                    </div>  
                    <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                    <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                    <div className="movie__genres">
                        {
                            currentMovieDetail && currentMovieDetail.genres
                            ? 
                            currentMovieDetail.genres.map(genre => (
                                <><span className="movie__genre" key={genre.id}>{genre.name}</span></>
                            )) 
                            : 
                            ""
                        }
                    </div>
                </div>
                <div className="movie__detailRightBottom">
                    <div className="synopsisText">Synopsis</div>
                    <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                </div>
                
            </div>
        </div>
        <div className="movie__productionDetails">
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span key={company.id} className="productionCompanyImage">
                                    <img key={company.logo_path} className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt=""/>
                                    <span key={company.name}>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MovieDetails;