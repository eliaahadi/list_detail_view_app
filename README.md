# list_detail_view_app
Simple app calling json API with list and detail views

# Setup
- git clone and cd into repo
```
$ git clone repo
$ cd list_detail_view_app
list_detail_view_app $ npm init
```
- Add these packages in the package.json
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "rails": "foreman start -f Procfile"
  }
  "devDependencies": {
    "@types/react": "16.3.17",
    "@types/react-dom": "^16.0.9",
    "awesome-typescript-loader": "^5.2.1",
    "typescript": "^3.1.3",
    "webpack": "^4.22.0",
    "webpack-dev-server": "^3.1.10"
  },
  "dependencies": {
    "axios": "^0.19.0",
    "mobx": "^5.5.2",
    "mobx-react": "^5.3.5",
    "mobx-react-devtools": "^6.0.3",
    "react": "^16.5.2",
    "react-dom": "^16.5.2"
  }
```
- Install the packages with command:
```
list_detail_view_app $ npm install
```

- Create the index.html file
```
<html>
  <head>
    <title>List Detail App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src='/static/bundle.js'>
    </script>
  </body>
</html>
```
- Create the webpack.config.js file.
```
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:7000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "awesome-typescript-loader",
      include: path.join(__dirname, 'src')
    }]
  }
};
```
- Create the tsconfig.json
```
{
  "compilerOptions": {
    "target": "es5",
    "removeComments": true,
    "experimentalDecorators": true,
    "jsx": "react",
    "outDir": "dist",
    "lib": ["dom", "es2015"]
  },
  "exclude": [
    "node_modules",
    "static"
  ]
}

```

- Create the server.js file 
```
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: false,
  historyApiFallback: true,
"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  // }
}).listen(5000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:5000');
});
```
- Create the folders with the file src/index.tsx
```
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import App from '../src/components/App.tsx';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
```
- Create the App.tsx file in src/components
```
import * as React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

```

- Run app with command:
```
list_detail_view_app $ npm start
```
- Go to localhost:5000, you will see the "Hello World" on the website.