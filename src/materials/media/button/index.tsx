/* eslint-disable react/display-name */
import * as React from 'react';
import { Button } from 'antd';
import { IButtonConf } from './schema';

 const AntdButton = React.memo(
  (props: IButtonConf & { isTemplate: boolean }) => {

    const { isTemplate, ...rest } = props;

    return isTemplate ? (
      <div>
        <img src='./../../../asset/template-img/button.jpg' alt='按钮' />
      </div>
    ) : (
      <Button {...rest}>按钮</Button>
    );
  }
);
export default AntdButton