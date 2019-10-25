const express = require('express')
const router = express.Router()
const controller = require('../controllers/tarefasController')

router.get('/', controller.get)
router.get('/:id', controller.getById)
router.get('/:nome/nome', controller.getNome)
router.get('/:id/concluidas', controller.getConcluido)

module.exports = router