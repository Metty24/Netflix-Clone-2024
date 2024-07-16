import React, { useEffect } from 'react'
import "./row.css"
import axios from "../../../utils/axios";
import movieTrailer from movieTrailer;
import YouTube from 'react-youtube';



function Row = ({title, fetchUrl, isLargeRow}) => {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try{
        console.log(fetchUrl)
        const request = await axios.get(`http://localhost:4000/api/${fetchUrl}`);
        console.log(request)
        setMovie(request.data.results);
      } catch (error){
        console.log("error", error);
      }
    })()
  }, [fetchUrl]);

  const handClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || movie?.original_name)
      .then((url) =>{
        console.log(url)
        const urlParams = new URLSearchParams(new URL(url).search)
        console.log(urlParms)
        console.log(urlParams.get('v'))
        setTrailerUrl(urlParams.get('v'));
      })

    }
  }
  const opts = {
    height: '390',
    width: "100%",
    playerVars:{
      autoplay: 1,
    },

  }
  return(
    <div className = "row">
      <h1>{title}</h1>
      <div className = "row posters">
        {movies?.map(movie, index) => (
          <img 
          onclick = {() => handClick{movie}}
          key = {index} srs={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className ={`row_poster $
            {islargeRow && "row_posterLarge"}`}
          />
        )}}

      </div>
      
    </div>
  )
}

export default Row
