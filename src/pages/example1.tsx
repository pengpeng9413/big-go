/* eslint-disable react/display-name */
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .slider {
    width: 300px;
    & button {
      background: transparent;
    }
    .item {
      background: transparent;
      cursor: pointer;
      & img {
        width: 88px;
        height: 70px;
      }
      & h3 {
        background: #5f9ea0;
        color: #fff;
        font-size: 36px;
        line-height: 100px;
        margin: 10px;
        padding: 2%;
        position: relative;
        text-align: center;
      }
    }
  }
  .slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: #928c8c;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;

export const settings = {
      centerPadding: '20px',
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
};

export default React.memo(() => {

  const [isActive, setIsActive] = React.useState(false);

  const handleClick = (e: any) => {
    setIsActive(true);
  };

  const imgs: Array<any> = new Array(8);

  
  return (
    <Wrapper>
      <div className='slider'>
        <Slider {...settings}>
          {imgs.fill(9).map((item) => (
            <div className='item' key={item} onClick={handleClick}>
              <img
                src='http://39.97.178.20/fileAnnexes/20210709/537fdd17-aa61-4a2a-8702-ddffc6e9a7ad/5c6736ff-0595-4826-9990-7b83c327fa58.jpg'
                alt=''
              />
            </div>
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
});
