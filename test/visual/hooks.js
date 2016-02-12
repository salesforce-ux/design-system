const express = require('express');
const app = express();
const exec = require('child_process').exec;
const path = require('path');

app.use(express.static(__dirname + '/../.www'));
var server;

const setup = done => {
  exec('npm install', {cwd: path.join(__dirname, '../'), stdio: [0, 1, 2]}, (err, stdout, stderr) => {
    if(err) throw(err)

    exec('npm run build', {cwd: path.join(__dirname, '../'), stdio: [0, 1, 2]}, (err, stdout, stderr) => {
      if(err) throw(err)

      server = app.listen(8000)
      done()
    })
  })
}

const teardown = done => {
  server.close()
  done()
}

module.exports = {setup, teardown}
