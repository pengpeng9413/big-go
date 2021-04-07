# big-gago

Empty project.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
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
