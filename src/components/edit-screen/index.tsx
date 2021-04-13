/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import GridLayout, { ItemCallback } from 'react-grid-layout';
import { useDrop } from 'react-dnd';

interface EditScreenProps {
  /** 位置信息 */
  dragState: { x: number; y: number };
}

/**
 *
 * @param props
 * @returns
 * @description Draggable 组件能够赋予自组件可拖拽的能力
 */
export const EditScreen = (props: EditScreenProps) => {
  const { dragState } = props;

  return (
    <Draggable
      position={dragState}
      handle='.handle'
      onStop={(e: DraggableEvent, data: DraggableData) => {
        console.log('data', data);
      }}
    >
      <GridLayout cols={12} rowHeight={30} width={1200} ></GridLayout>
    </Draggable>
  );
};
