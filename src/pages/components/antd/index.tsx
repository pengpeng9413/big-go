import React from 'react';
import * as Antd from 'antd';

/** 按钮 */
export const AntdButton = () => {
  return <Antd.Button>按钮</Antd.Button>;
};

/** 时间选择器 */
export const AntdDatePicker = () => {
  return <Antd.DatePicker />;
};

/** 分割线 */
export const AntdDivider = () => {
  return <Antd.Divider />;
};

/** 面包屑 */
export const AntdBreadcrumb = () => {
  return <Antd.Breadcrumb>面包屑</Antd.Breadcrumb>;
};

/** 下拉菜单 */
export const AntdMenu = () => {
  return (
    <Antd.Menu>
      <Antd.Menu.Item>列表1</Antd.Menu.Item>
      <Antd.Menu.Item>列表2</Antd.Menu.Item>
      <Antd.Menu.Item>列表3</Antd.Menu.Item>
    </Antd.Menu>
  );
};

/** dropDown */
export const AntdDropDown = () => {
  return <Antd.Dropdown overlay={AntdMenu}>鼠标进过</Antd.Dropdown>;
};

/** Step */
export const AntdStep = () => {
  return (
    <Antd.Steps current={1}>
      <Antd.Steps.Step title='Finished' description='This is a description.' />
      <Antd.Steps.Step
        title='In Progress'
        subTitle='Left 00:00:08'
        description='This is a description.'
      />
      <Antd.Steps.Step title='Waiting' description='This is a description.' />
    </Antd.Steps>
  );
};
