const {AuthServices} = require('../services');

const userLogin = async (req, res, next) => {
    try {
        const credentials = req.body;
        const result = await AuthServices.authenticate (credentials);
     

        if (result){
            const { first_name, last_name, email, user_id} = result.result;
            const user = { first_name, last_name, email, user_id};
            const token = AuthServices.getToken(user)
            user.token = token
            res.json({ ...user});
        } else {
            res.status(400).json({message: 'Informacion invalida'});
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Email o contrasena invalida'
        });
    }
}


module.exports = {
 userLogin,


};
    