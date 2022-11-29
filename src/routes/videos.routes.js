const {Router} = require('express');
const {createVideo, deleteVideo} = require('../controllers')


const router = Router();

router.post('/videos', createVideo);

router.delete('/videos', deleteVideo);




module.exports = router;