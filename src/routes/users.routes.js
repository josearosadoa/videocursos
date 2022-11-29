const {Router} = require('express');
const {
    getAllUsers,
    getUserById,
    userRegister,
    userUpdate,
} = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.put('/users/:user_id', userUpdate);

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.post('/users', userRegister );



// router.post('/users', createUsers);

// router.put('/users', updateUser);

// router.delete('/users', deleteUser);

module.exports = router;