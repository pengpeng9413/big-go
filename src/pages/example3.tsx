import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
   display: flex;
   width: 400px;
   justify-content: space-between;
   align-items: center;
`


const Demo3 = ()=>{
    return (
        <Wrapper>
            <div>
                图片
            </div>
            <div>
                视频
            </div>
        </Wrapper>
    )
}
export default Demo3