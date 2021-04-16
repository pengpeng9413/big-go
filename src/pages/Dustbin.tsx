/* eslint-disable react/display-name */
import * as React from 'react';
import { useDrop } from 'react-dnd';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import update  from 'immutability-helper'
import AsyncComponent from './async-map-component';

export const ItemTypes = {
  BOX: 'box',
};

const style: React.CSSProperties = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
};

interface Props {
  /** 位置信息 */
  dragState: { x: number; y: number };
  /** 更新位置信息 */
  setDragState: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
}

/**
 * @see 组件放置的容器
 * @description Draggable 的引入在于解决非画布元素的拖拽？
 * @returns
 */
export const Dustbin = React.memo((props: Props) => {
  const { dragState,setDragState } = props;

  const [data,setData]=React.useState<Array<any>>([])
  // 第一个参数为从useDrag 中获取到的，比如这里的item
  const [{ canDrop, isOver, item }, drop] = useDrop(() => ({
    accept: ["button",'audio'],
    drop: (item,monitor) => { // 释放后触发的回调
      console.log("item",item,"monitor",monitor)
      setData((preState:any)=>{
        return update(preState, {$push: [item]})
      })
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      item: monitor.getItem(),
    }),
  }));


  return (
    <Draggable
      position={dragState}
      handle='.js_box'
      onStop={(e: DraggableEvent, data: DraggableData) => {
        setDragState({ x: data.x, y: data.y });
      }}
    >
      <div
        ref={drop}
        role={'Dustbin'}
        style={{ ...style, width: '100%', height: '100%' }}
      >
        {
            data.length?data.map((kk,index)=><AsyncComponent key={index} {...item} type={kk.type} isTemplate={false}/>):null
        }
      </div>
    </Draggable>
  );
});
