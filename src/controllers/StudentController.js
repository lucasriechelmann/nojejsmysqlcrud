const mysql = require("../config/database")
const StudentRepository = require("../repositories/StudentRepository")

module.exports = {
    index(request, response){
        StudentRepository
            .getAll()
            .then(students => response.send(students))
            .catch(err => response.send(err))
    },
    show(request, response){
        StudentRepository
            .get(request.params.id)
            .then(student => response.send(student))
            .catch(err => response.send(err))
    },
    destroy(request, response){
        StudentRepository
            .delete(request.params.id)
            .then(result => response.send(result))
            .catch(err => response.send(err))
    },
    update(request, response){
        StudentRepository
            .update(request.params.id, request.body)
            .then(student => response.send(student))
            .catch(err => response.send(err))
    },
    store(request, response){
        StudentRepository
            .insert(request.body)
            .then(student => response.send(student))
            .catch(err => response.send(err))
    }
}