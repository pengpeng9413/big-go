# big-go

Empty project.

## Building and running on localhost

First install dependencies:

```sh
npm install / yarn
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build
```

## Running

Open the file `dist/index.html` in your browser

## Testing

To run unit tests:

```sh
npm test
```

## Credits

Made with [createapp.dev](https://createapp.dev/)

## build
how to measure the speed, we can see the flowing [speed-measure-webpack-plugin](https://github.com/stephencookdev/speed-measure-webpack-plugin)

## we need three webpack-config files 
1. the base 
2. the production
3. the development
if we use only one ,we should write many `if else` according to the `process env`,this is the reasons

## webapck 构建速度优化
1. 在webconfig 没有拆成三个之前，项目的构建(build)耗时在50多秒，热更新速度在二三十秒
2. 在拆完之后，build耗时直接降为16s;热更新启动不超过1s,大大的提升了性能
3. 这次实践证明确实我们的webconfig 拆为三个配置文件具有更好的维护性和性能提升
   

## 关于使用react-dnd 来完成组件拖拽
1. 首先解释一下 react-dnd 的英文全称：Drag and Drop for React
2. 这个开源组件可以为我们带来什么，解决什么问题?