/* eslint-disable react/display-name */
import * as React from 'react';

/** 异步组件映射 */
const AsyncComponent = React.memo(
  (props: { [x: string]: any; type: string; isTemplate: boolean }) => {
    const { type, isTemplate, ...rest } = props;
    const [Component, RenderComponent] = React.useState<any>(null);

    React.useEffect(() => {
      // 动态导入组件
      import(`./../materials/media/${type}`).then(({ default: Component }) => {
        RenderComponent(Component);
      });
    }, [type]);
   
    console.log("Component",Component)
    return (
      <div style={{ padding: '8px' }}>
        <React.Suspense fallback='loading'>
          {Component ? (
            <Component isTemplate={isTemplate} {...rest} />
          ) : null}
        </React.Suspense>
      </div>
    );
  }
);

export default AsyncComponent;
