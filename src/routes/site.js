const express = require('express')
const router = express.Router()

const newSiteControlller = require('../app/controllers/SiteController')

router.use('/:slug', newSiteControlller.search)
router.use('/', newSiteControlller.index)




module.exports = router