import React from 'react'
import MovieCards from '../MoveiCards/MovieCards'
import { Sliders } from '../Sliders/Sliders';
import tmdbApi from '../../config/tmdbApi';
import styled from 'styled-components';
const Search = () => {
  return (
    <>
      <Sliders
        type="popular"
        sliderName="Popular Search"
        fun={tmdbApi.getMovieList}
        params={{ page: 10 }}
      />
      <CardHeaderText color={"white"}>Recommended For You</CardHeaderText>
      <MovieCards
        type="top_rated"
        fun={tmdbApi.getMovieList}
        params={{ page: 10 }}
      />
    </>
  );
}
const CardHeaderText = styled.h2`
  color: "#e1e6f0";
  margin:5px 0px 0px 13px;
`;
export default Search
