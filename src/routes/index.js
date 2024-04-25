const router = require ('express').Router();
const getCharById = require ('../../ejemplos/getCharById');
const login = require ('../../ejemplos/login');
const postUser = require ('../../ejemplos/postUser')
const postFav = require ('../../ejemplos/postFav')
const deleteFav = require ('../../ejemplos/deleteFav')

router.get('/character/:id',  getCharById)
router.get('/login',  login)
router.post('/login',  postUser)
router.post('/fav',  postFav)
router.delete('/fav/:id',  deleteFav)

module.exports = router;