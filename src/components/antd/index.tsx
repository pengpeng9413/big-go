import React from 'react';
import * as Antd from 'antd';
import {WithWrapperAntd} from '../../pages/high-order-components'

/** 按钮 */
export const AntdButton = WithWrapperAntd(() => <Antd.Button type="primary">按钮</Antd.Button>);

/** 时间选择器 */
export const AntdDatePicker =WithWrapperAntd(() => (<Antd.DatePicker />));

/** 分割线 */
export const AntdDivider = WithWrapperAntd(() => <Antd.Divider />)

/** 下拉菜单 */
export const AntdMenu =WithWrapperAntd(()=>(
    <Antd.Menu>
      <Antd.Menu.Item>列表1</Antd.Menu.Item>
      <Antd.Menu.Item>列表2</Antd.Menu.Item>
      <Antd.Menu.Item>列表3</Antd.Menu.Item>
    </Antd.Menu>
  )) 

/** dropDown */
export const DropDown =WithWrapperAntd(() => (<Antd.Dropdown overlay={()=><AntdMenu/>}>鼠标进过</Antd.Dropdown>)) 

/** Step */
export const AntdStep = WithWrapperAntd (()=>(
    <Antd.Steps current={1}>
      <Antd.Steps.Step title='Finished' description='step 1' />
      <Antd.Steps.Step
        title='In Progress'
        description='step 2.'
      />
      <Antd.Steps.Step title='Waiting' description='step 3' />
    </Antd.Steps>
  )) 




