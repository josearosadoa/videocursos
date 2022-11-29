const { Users } = require('../models');
const {UserServices} = require('../services');



const getAllUsers = async (req, res, next) => {
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Algo anda mal',
        });
    } 
};

const getUserById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        
    }
};

const userRegister = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser)
        res.status(201).json(result);
    } catch (error) {
       next({
        status:400,
        errorContent: error,
        message: "Faltan datos"
       }) 
    }
};

const userUpdate = async (req, res, next ) => {
    try {
        const {user_id} = req.params;
        console.log(user_id)
        const updateData = req.body;
        const result = await UserServices.update( user_id, updateData);
        res.status(200).json(result)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message:"Error de datos"
        })
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    userRegister,
    userUpdate,
}