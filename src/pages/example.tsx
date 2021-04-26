/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { throttle } from 'lodash';

const Wrapper = styled.div<{ styleWidth: number }>`
  position: relative;
  height: 450px;
  width: 620px;
  overflow: hidden;
  .left,
  .right {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    background-color: #e7e9ea;
  }
  .left {
    // 原始图
    & .inner {
      left: 0;
      position: absolute;
      height: 100%;
      background-color: rgb(58, 50, 52);
      width: 620px;
      background-image: url('https://www.indiba.com/wp-content/uploads/2019/07/idc-cs-case-2-b.png');
    }
  }
  .right {
    left: auto;
    right: 0px;
    height: 100%;
    width: ${(p) => `${p.styleWidth}%`}; // 右边的距离
    & .inner {
      right: 0;
      background-image: url('https://www.indiba.com/wp-content/uploads/2019/07/idc-cs-case-2-a.png');
      background-color: rgb(48, 48, 48);
      width: 620px;
      position: absolute;
      height: 100%;
    }
  }
  .bg-contain {
    background-size: contain;
    -ms-behavior: url(bg-cover.htc);
    background-position: center;
    background-repeat: no-repeat;
  }
  .handle {
    position: absolute;
    top: 0;
    height: 100%;
    bottom: 0;
    width: 1px;
    left: ${(p) => `${100 - p.styleWidth}%`};
  }
  .handle:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 50px;
    height: 30px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzMnIGhlaWdodD0nMTAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGcgZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdldmVub2RkJz48cGF0aCBkPSdNNiA4LjgzM0wyLjI3IDUgNiAxLjE2NyA0Ljg2NSAwIDAgNWw0Ljg2NSA1ek0yNyA4LjgzM0wzMC43MyA1IDI3IDEuMTY3IDI4LjEzNSAwIDMzIDVsLTQuODY1IDV6Jy8+PC9nPjwvc3ZnPg==);
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid #fff;
    -webkit-transition: background-color 0.4s;
    transition: background-color 0.4s;
  }
  .handle:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    pointer-events: none;
  }
  .caption {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.3)),
      to(transparent)
    );
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      transparent 100%
    );
    height: 80px;
    padding: 20px;
    color: #fff;
    font-weight: 700;
  }
`;

export default React.memo(() => {
  const [styleWidth, handleStyle] = React.useState(50);
  const [isDrag,setIsDarg]=React.useState(false)

  const Deliver = React.useRef<any>(null);
  const Box = React.useRef<any>(null);
  const Left = React.useRef<any>(null);
  const Right = React.useRef<any>(null);

  // 鼠标按下
  const handleMouseDown = (e: React.MouseEvent) => {
    
    // clientX 可视区域坐标
    const startX = e.clientX;
    setIsDarg(true)
    // offsetLeft ，相对于父层级别的左侧距离
    Deliver.current.left = Deliver.current.offsetLeft;
    // 文档鼠标移动
    document.onmousemove = function (e) {
      const endX = e.clientX;
      const moveLen = Deliver.current.left + (endX - startX);
      const maxT = Box.current.clientWidth - Deliver.current.offsetWidth;
      Deliver.current.style.left = moveLen - 1 + 'px';
      Left.current.style.width = moveLen + 'px';
      Right.current.style.width = Box.current.clientWidth - moveLen - 1 + 'px';
    };
    // 文档鼠标抬起
    document.onmouseup = function () {
      // setIsDarg(false)
      document.onmousemove = null;
      document.onmouseup = null;
      // element.releaseCapture  释放鼠标捕获
      Deliver.current.releaseCapture && Deliver.current.releaseCapture();
    };

    // 鼠标离开
    Deliver.current.onmouseleave=function(){
      Deliver.current.releaseCapture && Deliver.current.releaseCapture();
    }

    Deliver.current.setCapture && Deliver.current.setCapture();
    return false;
  };

  return (
    <Wrapper styleWidth={styleWidth} ref={Box}>
      <div className='left' ref={Left}>
        <div className='inner bg-contain'>
          <div className='caption' style={{ textAlign: 'left' }}>
            <span>Before</span>
          </div>
        </div>
      </div>
      <div className='right' ref={Right}>
        <div className='inner bg-contain'>
          <div className='caption' style={{ textAlign: 'right' }}>
            <span>After</span>
          </div>
        </div>
      </div>
      <div
        className='handle'
        ref={Deliver}
        id='deliver'
        onMouseDown={handleMouseDown}
      ></div>
    </Wrapper>
  );
});
