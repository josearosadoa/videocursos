const {userRegister, getAllUsers, getUserById, userUpdate } = require('./users.controllers');
const {userLogin} = require ('./auth.controllers');
const {getAllCourse, createCourse, editCourse} = require('./courses.controllers');
const {createVideo, deleteVideo} = require('./videos.controllers');
const {createCategory, deleteCategory} = require('./categories.controllers');

module.exports = {
    userRegister,
    getAllUsers,
    getUserById,
    userLogin,
    userUpdate,
    getAllCourse,
    createCourse,
    editCourse,
    createVideo,
    deleteVideo,
    createCategory,
    deleteCategory,
};