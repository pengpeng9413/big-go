/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-empty-interface */
import * as React from 'react'
import styled from 'styled-components';

export const Wrapper=styled.div`
  padding:8px;
  border:1px dashed #2e63dc87;
  cursor: pointer;
`

interface ComponentProps {

}

// interface ComponentState {

// }


/**
 * 如何来解读这段代码,发现其实我是个ts小白
 * 类型 IEChartsComponent 定义了一个泛形，然后传递联合后面的类型
 */
type IEChartsComponent<P> = React.ComponentType<P> & ComponentProps;

/**
 * 
 * @param WrappedComponent 
 * @param rest 
 * @returns 
 * React.ComponentType 这个类型包含class 类的组件和 Function  类的组件
 */
export function WithWrapperAntd(WrappedComponent:React.ComponentType | React.ElementType,...rest: any[]):React.ComponentType|React.ElementType{
   return class Component extends React.Component<{props:any,state:any}> {
    constructor(props:any){ 
      super(props)
    }
    render(){
        return (<Wrapper><WrappedComponent/></Wrapper>) 
    }
   }
}

