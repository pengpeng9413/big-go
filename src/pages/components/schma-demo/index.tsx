import React, { ComponentClass, FunctionComponent } from 'react';
import { Test,Test1,Test2,Test3 } from './../components-test/index';


interface schemaData {
     /** 组件或则是html 标签 */
     component:FunctionComponent | ComponentClass | string;
     /** props */
     props?:any
     /** innerText */
     innerText?:string
}

interface JsonSchema extends schemaData {
    /** children */
    children?:Array<schemaData>
}

export const Demo = () => {
  // 我们来验证一下，如果传一个带json schema,定义这么一个UI数据结构，渲染出我们想要的组件

  const propDatas:Array<JsonSchema> =[{
    component: Test,
    props: {
        key:Symbol(1).toString()
    },
    children: [
      {
        component:Test1,
        props: {
            key:Symbol(2).toString()
        }
      },
      {
        component:Test2,
        props: {
            key:Symbol(3).toString()
        }
      },
      {
        component:Test3,  // 组件
        props:{
            key: Symbol(4).toString(),
        }
      },
      {
        component:'div',  // html 标签
        props:{
            style:{color:"red",},
            key:Symbol(5).toString(),
        },
        innerText:"我是个html标签，不是组件，看你怎么渲染我"
      }
    ],
  }] ;

  /**
   * 根据json schema 递归生成dom
   * @param data 
   * @returns 
   */
  const renderPlot=(data:Array<JsonSchema>):any => {
   return data.map((item:JsonSchema)=>React.createElement(item.component,item.props||null,item.children?.length?renderPlot(item.children):item.innerText||null))
  }

  return <div>{renderPlot(propDatas)}</div>
};
