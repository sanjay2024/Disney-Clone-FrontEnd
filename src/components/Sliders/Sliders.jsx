import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation,Autoplay, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import apiConfig from "../../config/apiConfig";
import { styled } from "styled-components";
SwiperCore.use([Navigation,Pagination, Autoplay]);
export const Sliders = (props) => {
  const {sliderName,type,fun,params}=props;
  const [movies, setPopularMovies] = useState([]);
  useEffect(() => {
    try{
      const getData = async () => {
        const movei = await fun(type, { params });
        setPopularMovies(movei.results);
      };
      getData();
    }
    catch(e){
      throw e;
    }
  },[]);
  return (
    <Row
      style={{
        marginTop: "15px",
        padding:"0px 10px"
      }}
    >
      <h2 style={{ color: "#e1e6f0",marginLeft:"6px" }}>{sliderName}</h2>
      <Container
        slidesPerView={2}
        spaceBetween={2}
        navigation
        pagination={{
          clickable: true,
          type: "none",
        }}
        breakpoints={{
          550: {
            slidesPerView: 3,
            spaceBetween:40,
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1020: {
            slidesPerView: 8,
            spaceBetween:10,
          },
        }}
        className="mySwiper"
      >
        {movies.map((data, i) => (
          <SwiperSlide key={i}>
            
              <Card style={{ height: "250px",padding:"5px",cursor:"pointer"}}>
                <Card.Img
                  style={{ height: "100%",width:"100%"}}
                  variant="top"
                  src={apiConfig.originalImage(data.poster_path)}
                />
              </Card>
          </SwiperSlide>
        ))}
      </Container>
    </Row>
  );
};

const Container = styled(Swiper)`
   margin-top:10px;
  @media (max-width: 640px) {
    .swiper-button-next,
    .swiper-button-prev {
      display:none;
    }

    .swiper-button-disabled {
      visibility: hidden;
      opacity: 0;
      transition: 0.5s ease-in-out;
    }
  }
`;