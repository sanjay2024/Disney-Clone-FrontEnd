import React from "react";
import { styled } from "styled-components";

const Viewers = () => {
  const viewerVedios = [
    {
      imageSrc: "/images/viewers-disney.png",
      vedioSrc: "/videos/disney.mp4",
    },
    {
      imageSrc: "/images/viewers-marvel.png",
      vedioSrc: "/videos/marvel.mp4",
    },
    {
      imageSrc: "/images/viewers-pixar.png",
      vedioSrc: "/videos/pixar.mp4",
    },
    {
      imageSrc: "/images/viewers-starwars.png",
      vedioSrc: "/videos/star-wars.mp4",
    },
    {
      imageSrc: "/images/viewers-national.png",
      vedioSrc: "/videos/national-geographic.mp4",
    },
  ];
  return (
    <Container>
      {viewerVedios.map((viewer, i) => (
        <Wrap key={i}>
          <img src={viewer.imageSrc} alt="" />
          <video autoPlay loop muted>
            <source src={viewer.vedioSrc} type="video/mp4" />
          </video>
        </Wrap>
      ))}
    </Container>
  );
};
const Container = styled.div`
  margin-top:30px;
  margin-bottom:10px;
  display:flex;
  justify-content:center;
  align-items:center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  position: relative;
  padding:50px 100px;
  @media ((min-width: 900px) and (max-width:1140px)) {
    grid-template-columns:1fr 1fr 1fr;
    gap: 15px;
  }
  @media ((min-width: 350px) and (max-width:899px)) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;
const Wrap = styled.div`
  position: relative;
  cursor: pointer;
  padding: 20px 25px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /80%) 0pc 16px 10px -10px;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.2);
  text-align: center;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  img {
    width: 180px;
  }
  video {
    object-fit: fill;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    display: none;
    border-radius: 10px;
  }
  &:hover {
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -10px;
    border: 3px solid rgba(249, 249, 249, 0.8);
    transform: scale(1.05);
    video {
      display: block;
    }
  }
  @media ((min-width: 300px) and (max-width:899px)) {
    object-fit: fit;
    padding: 50px 80px;
  }
`;
export default Viewers;
