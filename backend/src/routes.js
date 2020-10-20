const express = require('express') // Importando o modulo express

const UniversityController = require('./controllers/UniversityController')
const CourseController = require('./controllers/CourseController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const CourseValidator = require('./validators/CourseValidator')

// Extraindo o modulo Rotas do express e atribuindo-o a uma variável
const routes = express.Router()

// Rota para o Login (Sessão) da universidade
routes.post('/session', SessionController.create)

// Rotas pertencentes a Universidades
routes.get('/university', UniversityController.list)
routes.post('/university', UniversityController.create)

// Rotas pertencentes a um perfil da faculdade
routes.get('/profile', ProfileController.list)

// Rotas pertencentes aos cursos
routes.get('/course/:name', CourseValidator.courseGet(), CourseController.list)
routes.post('/course', CourseValidator.coursePost(), CourseController.create)
routes.delete('/course/:id', CourseValidator.courseDelete(), CourseController.remove)

module.exports = routes