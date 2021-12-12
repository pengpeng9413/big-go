import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .card-item{
      min-width:170px;
      height:100px;
      background: black;
      margin: 4px;
      flex: 1;
      color: blue;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .empty{
      height: 0;
  }
`

const temp=12
// 如何根据n 快速生成 [1,2,3 ...n ] 的一个数组呢,这个应该是最简单的方法了
const newArray=Array.from((new Array(19)).keys())

const minCardWidth=170;

/**
 * 
 * @description 有这么个场景：flex 下的子元素是不定宽高的，可以设置一个最小宽度
 * 除了最后一行，前面的行数都可以被铺满，空间被铺满
 * 最后一个元素也需要做对齐
 * 问题：如果要铺满的情况，会出现最后一个元素，或者两个元素宽度和之前行数的元素宽度不一致
 * 如何来解决这个问题呢？
 * 思路：首先计算当前屏幕宽度铺满的时候可以铺几个 card 
 * 假设当前屏幕宽度为 p
 * card 的最小高度为 w
 * 一行可以铺下 n=Math.floor(p/w) 
 * 我们的数组长度假设为 l
 * 那么 l%n 为 最后一行显示的card数，极端情况为 1
 * 那么 我们补充 n-l%n 的空元素上去
 * 有两个关键点：
 * 1. 监听屏幕尺寸的宽度
 * 2. 填充多少个空元素去占位
 * @returns 
 */
const Demo4 = ()=>{
    const [maxNum,setMaxNum]=React.useState(1)

    React.useEffect(() => {
        // 监听window的resize事件
        handleSizeChange()
        window.addEventListener("resize",handleSizeChange)
        return () => {
            window.removeEventListener("resize",handleSizeChange)
        }
    }, [])

    const handleSizeChange=()=>{
        const temp = Math.floor(document.body.clientWidth/(minCardWidth+8));
        setMaxNum(temp)
    }

    return (
        <Wrapper>
           {newArray.map((item,index)=>(
               <div key={index} className="card-item">React</div>
           ))}
           { Array.from(new Array(maxNum-newArray.length%maxNum).keys()).map((itemEmpty)=>{
               return <div key={itemEmpty} className="card-item empty"></div>
           })  }
        </Wrapper>
    )
}
export default Demo4