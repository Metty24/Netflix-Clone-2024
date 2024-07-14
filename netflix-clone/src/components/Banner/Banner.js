
  
  
 import React, { useEffect, useState } from 'react'
 import axios from "../../utils/axios";
 import requests from '../../utils/requests';
 import "./banner.css"


const Banner = () => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        (async () => {
            (async () => {
                try{
                    const request = await axios.get(requests.fetchNetflixOriginals)
                    console.log(request)
                    setMovie(request.data.results[
                        Math.floor(Math.random() * request.data.results.length)
                    ]);
                }catch (error) {
                    console.log("error", error);
                }
            })()
        },[]);
  return (
    <div className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdp.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition:  "center",
        backgroundRepeat: "no-repeat"
      }}>
      
    
        <div className="banner__contents"> 
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
           
            <div className="banner__buttons">
            <button className="banner__button play">Play</button>
            <button className="banner__button">My List</button>
        </div>
        
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
        </div>

        <div className="banner__fadeBotom"/>
      

        </div>
         
        


    );
  
};

export default Banner

