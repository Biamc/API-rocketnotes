const { Router } = require("express")

const NotesController =  require('../controllers/NotesController')

const ensureAuthenticate = require('../middlewares/ensureAuthenticated')

const notesRoutes = Router()


const notesController = new NotesController()

notesRoutes.get('/', notesController.index)
notesRoutes.post('/', ensureAuthenticate, notesController.create)
notesRoutes.get('/:id', notesController.show)

notesRoutes.delete('/:id', notesController.delete)


module.exports = notesRoutes