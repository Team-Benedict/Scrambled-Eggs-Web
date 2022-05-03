const port = 3000
const app = require('./config/express.js')

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Eggs are being scrambled on port ${port}`)
})
