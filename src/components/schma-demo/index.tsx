import React, { ComponentClass, FunctionComponent } from 'react';
import { Test, Test1, Test2, Test3 } from '../components-test/index';
import { AntdButton, AntdDatePicker, AntdStep, AntdMenu } from '../antd';
import { useDrag } from 'react-dnd';
// import {AtndButton} from './../antd/button'
interface schemaData {
  /** 组件或则是html 标签 */
  component: FunctionComponent | ComponentClass | string;
  /** props */
  props?: any;
  /** innerText */
  innerText?: string;
}

interface JsonSchema extends schemaData {
  /** children */
  children?: Array<schemaData>;
}
export const ItemTypes = {
  BOX: 'box',
};
export const ComponentCask = () => {
  //   const propDatas:Array<JsonSchema> =[{
  //     component: AntdButton,
  //     props: {
  //         key:Symbol(Math.random()).toString()
  //     },
  //     children: [
  //       {
  //         component:Test1,
  //         props: {
  //             key:Symbol(2).toString()
  //         }
  //       },
  //       {
  //         component:Test2,
  //         props: {
  //             key:Symbol(3).toString()
  //         }
  //       },
  //       {
  //         component:Test3,  // 组件
  //         props:{
  //             key: Symbol(4).toString(),
  //         }
  //       },
  //       {
  //         component:'div',  // html 标签
  //         props:{
  //             style:{color:"red",},
  //             key:Symbol(5).toString(),
  //         },
  //         innerText:"我是个html标签，不是组件，看你怎么渲染我"
  //       }
  //     ],
  //   },{
  //     component: AntdButton,
  //     props: {
  //         key:Symbol(7).toString()
  //     }
  //   }] ;

  const componentsList: Array<JsonSchema> = [
    { component: AntdButton },
    { component: AntdStep },
    { component: AntdDatePicker },
    { component: AntdMenu },
  ];

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult: any = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;

  /**
   * 根据json schema 递归生成dom
   * @param data
   * @returns
   */
  const renderPlot = (data: Array<JsonSchema>): any => {
    return data.map((item: JsonSchema, index: number) => {
      const tempEle = React.createElement(
        item.component,
        { key: Symbol(index).toString() },
        item.children?.length
          ? renderPlot(item.children)
          : item.innerText || null
      );
      return <div ref={drag} key="11">{tempEle}</div>
    });
  };

  return <div>{renderPlot(componentsList)}</div>;
};
