import React from 'react'
import {styled} from 'styled-components'
import { ImgSlider } from '../imageSlider/ImgSlider';
import Viewers from '../Viewers';
import {Sliders} from '../Sliders/Sliders';
import tmdbApi from '../../config/tmdbApi';
export const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Sliders
        type="popular"
        sliderName="Popular Movies"
        fun={tmdbApi.getMovieList}
        params={{ page: 1 }}
      />
      <Sliders
        type="popular"
        sliderName="Popular TV Shows"
        fun={tmdbApi.getTvList}
        params={{ page: 1 }}
      />
      <Sliders
        type="top_rated"
        sliderName="Top Tv Series"
        fun={tmdbApi.getTvList}
        params={{ page: 1 }}
      />
      <Sliders
        type="movie"
        sliderName="Marvel"
        fun={tmdbApi.search}
        params={{ query: "marvel", page: 2 }}
      />
      <Sliders
        type="tv"
        sliderName="Popular Anime Series"
        fun={tmdbApi.search}
        params={{ query: "anime", page: 1 }}
      />
    </Container>
  );
}
const Container = styled.div`
  min-height: calc(100vh - 77px);
  padding:0;
  position: relative;
  overflow: hidden;
  &:before {
    background:url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right:0;
    z-index: -2;
  }
`;
