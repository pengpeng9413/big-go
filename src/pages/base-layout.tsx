/* eslint-disable react/display-name */
import * as React from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragBox from './drag-box';
import { ComponentCask } from '../components/schma-demo';
import { Dustbin } from './Dustbin';
import { StateWithHistory } from 'redux-undo';
import Tmp from './../materials/media/template';
import AsyncWrapper from './async-map-component';

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
      width: 260px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 58px;
      }
      span {
        color: white;
        font-size: 15px;
      }
    }
    .header-center {
      flex: 1;
      text-align: left;
      color: white;
      & .canvas-operate{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        & .operate-item {
          width: 48px;
          text-align: center;
          background: cadetblue;
          border-radius: 4px;
          cursor: pointer;
        }
      }
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
      .material-title {
        text-align: center;
        height: 48px;
        line-height: 48px;
      }
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

  const [dragstate, setDragState] = React.useState({ x: 0, y: 0 });

  // 物料中心
  const RenderMaterials = () => {
    return Tmp.map((item, index) => {
      return (
        <DragBox key={item.displayName} item={item}>
          <AsyncWrapper
            {...item}
            isTemplate={true}
            className='material-item'
            key={item.displayName}
          />
        </DragBox>
      );
    });
  };

  return (
    <ROOT>
      <div className='header'>
        <div className='header-left'>
          <img src='./asset/img/logo.jpg' alt='gago-big 可视化大屏搭建平台' />
          <span className="head-title">{title}</span>
        </div>
        <div className='header-center'>
          {/* 画布操作区域 */}
          <div className="canvas-operate">
            <div className="operate-item">撤销</div>
            <div className="operate-item">重做</div>
          </div>
        </div>
        <div className='header-right'></div>
      </div>
      <div className='content'>
        <DndProvider backend={HTML5Backend}>
          <div className='content-left'>
            {/* 物料中心 */}
            <div className='material-title'>物料中心</div>
            {RenderMaterials()}
          </div>
          {/* 画布 */}
          <div className='content-center'>
            <Dustbin setDragState={setDragState} dragState={dragstate} />
          </div>
          {/* 配置区域 */}
          <div className='content-right'>配置区域</div>
        </DndProvider>
      </div>
      <div className='footer'></div>
    </ROOT>
  );
};
