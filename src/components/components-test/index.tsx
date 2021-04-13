import * as React from 'react'

export const Test=(props:any)=>{
    return (
        <div key="1212" style={{display:"flex",flexDirection:"column"}}>我是一个demo组件{props.children}</div>
    )
}

export const Test1=()=>{
    return (
        <span key="1313" style={{color:"blue"}}>我是子组件1</span>
    )
}

export const Test2=()=>{
    return (
        <span key="1414">我是子组件2</span>
    )
}

export const Test3=()=>{
    return (
        <>
          <div>{new Intl.DateTimeFormat('en-US').format(new Date)}</div>
          <span key="1515">我是子组件3</span>
        </>
        
    )
}