import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import tmdbApi from "../../config/tmdbApi";
import apiConfig from "../../config/apiConfig";
export const ImgSlider = () => {
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const params = { page:1}
    const data = await tmdbApi.getMovieList("popular", { params });
    setMovies(data.results.slice(0, 4));
  };
  useEffect(() => {
    getMovie();
  }, [setMovies]);
  return (
    <Swiper
      style={{ marginTop:"5px",width:"100%",height:"100%",cursor:"pointer"}}
      navigation
      pagination={{
        clickable: true,
        type: "none",
      }}
      className="mySwiper"
    >
      {movies.map((movie, i) => (
        <ImageContainer key={i} style={{width:"100%"}}>
            <MovieTitle>{movie.original_title}</MovieTitle>
            <a href="/#">
              <img
                style={{ width: "100%",height:"500px"}}
                src={apiConfig.originalImage(movie.backdrop_path)}
                alt=""
              />
            </a>
          </ImageContainer>
      ))}
    </Swiper>
  );
};
const ImageContainer=styled(SwiperSlide)`
    @media(max-width:650px){
      height:300px;
    }
`
const MovieTitle = styled.h2`
  position:absolute;
  z-index: 1;
  left: 20px;
  opacity: 0.92;
  @media (max-width: 600px) {
    font-size: 16px;
    opacity:1;
  }
`;


