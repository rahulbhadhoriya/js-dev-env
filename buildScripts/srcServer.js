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

app.get('/users',function(req,res){
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id":1,"firstName":"bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id":2,"firstName":"Rahul","lastName":"Singh","email":"bghuis@gmail.com"},
    {"id":3,"firstName":"Prince","lastName":"gaur","email":"sdhjas@gmail.com"}

  ]);
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
