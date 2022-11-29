const {Router} = require('express');
const {createCategory, deleteCategory} = require('../controllers')


const router =  Router();

router.post('/categories', createCategory);

router.delete('/categories', deleteCategory);


module.exports = router;