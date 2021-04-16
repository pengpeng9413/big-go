/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, memo } from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';
import schema from '../materials/media/schema';
import Tmp from './../materials/media/template'

const Wrapper = styled.div`
  .container {
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
`;


interface Props {
  /** 子元素 */
  children:React.ReactNode;
  /** 包裹子元素的属性对象 */
  item: (typeof Tmp)[number]   
}

/**
 * @see 组件包裹器
 * @param props 
 * @returns 
 */
const TargetBox = memo((props: Props) => {
  const { item, children } = props;

  // 第二个是个ref
  const [{ isDragging }, drag] = useDrag({
    type: item.type,
    item: () => { // 拖拽需要传递的数据
      return {
        type: item.type,
        config: schema[item.type].config,
        h: item.height,
        editableEl: schema[item.type].editData,
        category: item.category,
        name:schema[item.type].name
        // keyEle:item.type // 元素的标识
      };
    },
    collect: (monitor) => ({ // 收集函数，返回一个对象
      isDragging: monitor.isDragging(),
    }),
  });

  const containerStyle = useMemo(
    () => ({
      opacity: isDragging ? 0.4 : 1,
      cursor: 'move',
      height: '140px',
    }),
    [isDragging]
  );

  return (
    <Wrapper>
      <div className='container' style={{ ...containerStyle }} ref={drag}>
        <div
          style={{
            height: '110px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            overflow: 'hidden',
            background:"white"
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
