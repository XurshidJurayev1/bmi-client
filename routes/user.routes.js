const {Router} = require('express')
const router = Router()
const userController = require('../controllers/userContr')


router.get('/get', userController.getAll)
router.delete('/:id', userController.deleted)
router.put('/:id', userController.update)


module.exports = router