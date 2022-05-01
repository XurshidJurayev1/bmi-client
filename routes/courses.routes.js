const {Router} = require('express')
const router = Router()
const CoursesController = require('../controllers/CoursesContr')


router.post('/create', CoursesController.create)
router.get('/get', CoursesController.getAll)
router.delete('/:id', CoursesController.delete)
router.put('/:id', CoursesController.update)


module.exports = router