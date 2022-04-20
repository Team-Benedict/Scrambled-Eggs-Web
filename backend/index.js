const express = require('express')
const app = express();
const port = 3000;
const index = require('./src/routes/index.route.js');

app.use('/', index);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
