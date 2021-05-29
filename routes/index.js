const router = require('express').Router()

const artistRouter = require('./artists.router')
const artworkRouter = require('./artworks.router')
const publicationRouter = require('./publications.router')

router.use('/artworks', artworkRouter)
router.use('/artists', artistRouter)
router.use('/publications',publicationRouter)
module.exports = router