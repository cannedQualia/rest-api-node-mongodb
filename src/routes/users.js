const express = require('express')
// const router = express.Router()
const router = require('express-promise-router')()

const { 
    index,
    newUser,
    getUser,
    replaceUser,
    deleteUser
} = require('../controllers/user')

router.get('/', index)
router.post('/', newUser)
router.get('/:userId', getUser)
router.put('/:userId', replaceUser)
router.delete('/:userId', deleteUser)

module.exports = router