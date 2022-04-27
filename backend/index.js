const port = 3000;
const app = require('./config/express.js')

app.listen(port, () => {
  console.log(`Eggs are being scrambled on port ${port}`)
});
