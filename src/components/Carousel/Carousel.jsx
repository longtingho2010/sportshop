import React, { useState } from "react";
import "./Carousel.css";
import {
  ArrowCircleRightOutlined,
  ArrowCircleLeftOutlined,
} from "@mui/icons-material";
import { carouselItems } from "../../data";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CarouselSlider = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${(props) => props.sliderPage * -100}vw);
`;

const Carousel = () => {
  const [sliderPage, setSliderPage] = useState(0);
  const navigate = useNavigate();

  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderPage(sliderPage > 0 ? sliderPage - 1 : 1);
    } else {
      setSliderPage(sliderPage < 1 ? sliderPage + 1 : 0);
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-arrow arrow-left"
        onClick={() => handleClick("left")}
      >
        <ArrowCircleLeftOutlined sx={{ fontSize: 90 }} />
      </div>

      <CarouselSlider sliderPage={sliderPage}>
        {carouselItems.map((item) => (
          <div className="slide">
            <div className="img-container">
              <img alt="" src={item.img} />
            </div>
            <div className="info-container">
              <button
                className="btn"
                onClick={() => navigate("genres/specialItems")}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </CarouselSlider>

      <div
        className="carousel-arrow arrow-right"
        onClick={() => handleClick("right")}
      >
        <ArrowCircleRightOutlined sx={{ fontSize: 90 }} />
      </div>
    </div>
  );
};

export default Carousel;
