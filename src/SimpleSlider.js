import React, { Component } from 'react';
import Slider from 'react-slick';
import "./slick-theme.css"; 
import "./slickStyle.css";
import styled from 'styled-components';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{ backgroundColor: '#ccf2f4', height: '100vh', }}>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <ImgCard>
            <h3>1</h3>
          </ImgCard>
          <ImgCard>
            <h3>2</h3>
          </ImgCard>
          <ImgCard>
            <h3>3</h3>
          </ImgCard>
          <ImgCard>
            <h3>4</h3>
          </ImgCard>
          <ImgCard>
            <h3>5</h3>
          </ImgCard>
          <ImgCard>
            <h3>6</h3>
          </ImgCard>
        </Slider>
      </div>
    )
  }
}

const BackgroundWrapper = styled.div`
backgroundColor: red;
height: 100vh;
`;

const ImgCard = styled.div`
color: red;
width: 100px;
height: 100px;
`;