/* eslint-disable react/display-name */
import * as React from 'react';
import styled from 'styled-components';
import { ComponentCask } from './components/schma-demo';

const ROOT = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    align-items: center;
    width: 100%;
    height: 58px;
    display: flex;
    justify-content: flex-start;
    background: #2b3d5fbf;
    .header-left {
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 58px;
      }
    }
    .header-center {
      flex: 1;
      text-align: center;
      color: white;
    }
    .header-right {
      width: 80px;
    }
  }
  .content {
    flex: 1;
    display: flex;
    .content-left {
      width: 340px;
      display: flex;
      flex-direction: column;
      background-color: #e7e1f1;
    }
    .content-center {
      background: -webkit-linear-gradient(top, transparent 35px, #eaeaea 36px),
        -webkit-linear-gradient(left, transparent 35px, #eaeaea 36px);
      background-size: 36px 36px;
      flex: 1;
      width: 100%;
    }
    .content-right {
      width: 300px;
      background-color: #e7e1f1;
    }
  }
`;

export const Layout = () => {
  const title = 'gago 大屏可视化建站平台';
  return (
    <ROOT>
      <div className='header'>
        <div className='header-left'>
          <img src='./asset/img/logo.jpg' alt='gago-big 可视化大屏搭建平台' />
        </div>
        <div className='header-center'>{title}</div>
        <div className='header-right'></div>
      </div>
      <div className='content'>
        <div className='content-left'>
          {/* 物料中心 */}
          <ComponentCask />
        </div>
        {/* 画布 */}
        <div className='content-center'>画布渲染器</div>
        {/* 配置区域 */}
        <div className='content-right'>配置区域</div>
      </div>
      <div className='footer'></div>
    </ROOT>
  );
};
