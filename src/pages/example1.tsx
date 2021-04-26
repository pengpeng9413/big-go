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
    width: 80%;
    & button {
      background: black;
    }
    .item {
      background: red;
      cursor: pointer;
      & img {
        width: 100%;
        height: 125px;
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
`;

export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
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
                src='http://192.168.100.223:9000/api/v1/gaohui/file/image?id=6084e1f0e4b0e069540c02d0'
                alt=''
              />
            </div>
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
});
