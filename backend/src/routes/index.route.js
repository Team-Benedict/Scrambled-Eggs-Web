var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.send('Eggs are being scrambled!')
})

module.exports = router
