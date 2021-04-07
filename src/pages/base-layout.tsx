/* eslint-disable react/display-name */
import * as React from 'react'
import styled from 'styled-components'

const ROOT=styled.div`
  position:relative;
`

export const Layout=()=>{
    return(
        <ROOT>
            <div className="header">
                <div className="header-left">
                    <img src='./asset/img/logo.jpg' alt="gago-big 可视化大屏搭建平台"/>
                </div>
                <div className="header-center"></div>
                <div className="header-right"></div>
            </div>
            <div className="content"></div>
            <div className="footer"></div>
        </ROOT>
    )
}

