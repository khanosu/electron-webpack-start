# electron-webpack-start

Inspired by: https://github.com/deadcoder0904/electron-webpack-sample

Updated all the dependencies to their latest versions, specifically updated webpack to version 4.x, and updated babel to new @babel/core etc.

    "@babel/core": "^7.2.2",
    
    "@babel/preset-env": "^7.2.3",
    
    "babel-loader": "^8.0.4",
    
    "electron": "^4.0.0",
    
    "electron-packager": "^13.0.1",
    
    "html-webpack-plugin": "^3.2.0",
    
    "uglifyjs-webpack-plugin": "^2.1.1",
    
    "webpack": "^4.28.3",
    
    "webpack-cli": "^3.1.2"
    
Changed the webpack.config.js to use multiple Targets, as explained in webpack's documentation:
"Although webpack does not support multiple strings being passed into the target property, you can create an isomorphic library by bundling two separate configurations": Multiple Targets: https://webpack.js.org/concepts/targets/

Added electron-packager to build the executable (in build_dist):

"scripts": {

    "dev": "webpack --mode development",
    
    "prod": "webpack --mode production",
    
    "start": "npm run dev && electron dist/main.js",
    
    "build": "npm run prod && electron-packager . --out=build_dist --overwrite --asar --platform=win32"
    
  },
