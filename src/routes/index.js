const router = require ('express').Router();
const getPersona = require ('../controllers/getPersona');
const login = require ('../../ejemplos/login');
const postPersona = require ('../controllers/postPersona')
const updatePersona = require ('../controllers/updatePersona')
const deletePersona = require ('../controllers/deletePersona')

router.get('/all',  getPersona)
router.post('/new',  postPersona)
router.update('/modif',  updatePersona)
router.delete('/pers/:id',  deletePersona)

module.exports = router;