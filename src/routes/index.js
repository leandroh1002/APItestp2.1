const router = require ('express').Router();
const getPersona = require ('../controllers/getPersona');
const login = require ('../controllers/login');
const postPersona = require ('../controllers/postPersona')
const updatePersona = require ('../controllers/updatePersona')
const deletePersona = require ('../controllers/deletePersona')

router.get('/all',  getPersona)
router.post('/new',  postPersona)
router.put('/modif',  updatePersona)
router.delete('/pers/:id',  deletePersona)
router.get('/login',  login)

module.exports = router;