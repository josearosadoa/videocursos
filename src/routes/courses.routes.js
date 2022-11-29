const {Router} = require('express');
const {getAllCourse, createCourse, editCourse} = require('../controllers');


const router = Router();

router.get('/courses', getAllCourse);

 router.post('/courses', createCourse);

 router.put('/courses/:course_id', editCourse);

// router.delete('/courses');


module.exports = router; 
