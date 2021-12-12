/* eslint-disable react/display-name */
import * as React from 'react';

/** 异步组件映射
 *  通过组件路径来import组件 ，
 *  这里涉及一个import的问题，动态导入的问题
 *  详见动态导入：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import
 */
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
    

    const Rendertor=()=>{
      return (
        <React.Suspense fallback='loading'>
            {Component ? (
              <Component isTemplate={isTemplate} {...rest} />
            ) : null}
        </React.Suspense>
      )
    }

    // 这个8px 在画布中是需要干掉的，后续需要优化
    return (!isTemplate?Rendertor():<div style={{padding:'8px'}}>{Rendertor()}</div>);
  }
);

export default AsyncComponent;
