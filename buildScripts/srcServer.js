import express from 'express';
import path from 'path';
import opn from 'opn';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const complier = webpack(config);

/* eslint-disable no-console */
//webpack middleware for express
app.use(require('webpack-dev-middleware')(complier,{
  noInfo:true,
  publicPath:config.output.publicPath
}));

// default route & send index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

//port number
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`development server started on port no:${port}`)
    opn(`http://localhost:${port}`);
  }
})
