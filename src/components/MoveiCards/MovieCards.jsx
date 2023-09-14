import {
  Box,
  Grid,
} from "@mui/material";
import { styled } from "styled-components";
import apiConfig from "../../config/apiConfig";
import { useEffect, useState } from "react";
const MovieCards = (props) => {
  const {type,fun,params}=props;
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
    const getData=async()=>{
      const data=await fun(type,{params});
      setMovies(data.results);
    }
    getData();
  },[])
  return (
    <>
      <Box sx={{ flexGrow: 1, pl: 3, pr: 3, mt: 2 }}>
        <Grid container spacing={{ xs: 1, md: 1 }}>
          {movies.map((movie) => (
            <Grid xs={6} lg={2} md={3} pl={1} pr={1} mt={2}>
                <CardContainer>
                       <MoviePoster src={apiConfig.originalImage(movie.poster_path)}/>
                       <MovieTitle>
                        {movie.original_title}
                       </MovieTitle>
                </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
const CardContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    cursor:pointer;
`
const MoviePoster=styled.img`
         padding:5px;
`
const MovieTitle=styled.p`
  
`
export default MovieCards;
