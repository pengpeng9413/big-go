/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, memo } from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components' 
import schema from '../materials/media/schema';

const Wrapper=styled.div`
 .container{
    position: relative;
        margin-bottom: 10px;
        width: 100%;
        overflow: hidden;
        user-select: none;
        border: 2px solid #9e9e9e3d;
        transition: border 0.3s;
        &:hover {
          border: 2px solid #06c;
        }
        &::after {
          content: '';
          position: absolute;
          z-index: 99;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
 }
`


const TargetBox = memo((props) => {
  const { item ,children} = props;
  // dnd ts 类型有问题
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: item.type,
      config: schema[item.type].config,
      h: item.h,
      editableEl: schema[item.type].editData,
      category: item.category,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const containerStyle = useMemo(
    () => ({
      opacity: isDragging ? 0.4 : 1,
      cursor: 'move',
      height: '140px',
    }),
    [isDragging],
  );

  return (
    <Wrapper>
        <div className="container" style={{ ...containerStyle }} ref={drag}>
          <div
            style={{
              height: '110px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {children}
          </div>
          <div
            style={{
              height: '30px',
              lineHeight: '30px',
              textAlign: 'center',
              backgroundColor: 'rgba(245, 245, 245, 1)',
              color: 'rgba(118, 118, 118, 1)',
            }}
          >
            {props.item.displayName}
          </div>
        </div>
      </Wrapper>
  );
});

export default TargetBox;
