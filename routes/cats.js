const express = require('express')
const router = new express.Router({ mergeParams: true });

router.get('/cat', async(req, res) => {
    const oregano = { cat: 'gray cat'}
    res.send(oregano)
} )
router.get('/cat2', async(req, res) => {
    const sabi = {cat: 'black cat' }
    res.send(sabi)
} )

module.exports = router;