/* eslint-disable react/display-name */
import * as React from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragBox from './drag-box';
import { ComponentCask } from '../components/schma-demo';
import { Dustbin } from './Dustbin';
import { StateWithHistory } from 'redux-undo';
import produce from 'immer'
import Tmp from './../materials/media/template';
import AsyncWrapper from './async-map-component';
import {ITimeLine} from './../const/time-type'
import {ROOT} from './base-layout-styled';

// 如何存储不同组件的操作,这里我们
const timeLine:ITimeLine = {
  past:[],
  present:[{componentName:null,x:0,y:0}],
  feature:[]
};

const reducer= (
  state:ITimeLine= timeLine,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    // 撤销
    case 'UNDO':
      return { ...state, ...payload };
    // 重做
    case 'RESET':
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const Layout = () => {
  const title = 'gago 大屏可视化建站平台';

  const [dragstate, setDragState] = React.useState({x:0,y:0});
  // 记录每个组件的位置
  const [state, dispatch] = React.useReducer(reducer, timeLine);
  
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
          <span className='head-title'>{title}</span>
        </div>
        <div className='header-center'>
          {/* 画布操作区域 */}
          <div className='canvas-operate'>
            <div className='operate-item'>撤销</div>
            <div className='operate-item'>重做</div>
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
