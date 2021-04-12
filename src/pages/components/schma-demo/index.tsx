import React, { ComponentClass, FunctionComponent } from 'react';
import { Test,Test1,Test2,Test3 } from './../components-test/index';
import {AntdButton,AntdDatePicker,AntdStep,AntdMenu} from './../antd';
// import {AtndButton} from './../antd/button'
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


    const componentsList:Array<JsonSchema>=[
        {component:AntdButton},
        {component:AntdStep},
        {component:AntdDatePicker},
        {component:AntdMenu},
    ]

  /**
   * 根据json schema 递归生成dom
   * @param data 
   * @returns 
   */
  const renderPlot=(data:Array<JsonSchema>):any => {
   return data.map((item:JsonSchema,index:number)=>React.createElement(item.component,{key:Symbol(index).toString()},item.children?.length?renderPlot(item.children):item.innerText||null))
  }

  return <div>{renderPlot(componentsList)}</div>
};
