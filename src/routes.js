const { Router } = require("express")
const StudentController = require("./controllers/StudentController")

const routes = Router()

routes.get('/Student', StudentController.index)
routes.post('/Student', StudentController.store)
routes.get('/Student/:id', StudentController.show)
routes.delete("/Student/:id", StudentController.destroy)
routes.put("/Student/:id", StudentController.update)

module.exports = routes