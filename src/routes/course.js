const express = require('express')
const router = express.Router()
const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create)
router.get('/:id/edit', courseController.edit )
router.get('/:id/delete', courseController.delete )
router.put('/:id', courseController.update )
router.post('/store', courseController.store)
router.get('/:id', courseController.show )
router.get('/', courseController.index )

module.exports = router