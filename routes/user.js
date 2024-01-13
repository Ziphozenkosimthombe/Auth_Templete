const express = require('express')
const router = express.Router()
const todosController = require('../controllers/users') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getUserName)
router.post('/', ensureAuth, todosController.postUserName)

module.exports = router