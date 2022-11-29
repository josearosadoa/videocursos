const {Users, Courses, UsersCourses} = require('../models');


class UserServices {
    static async getAll(){
        try {
            const result = await Users.findAll({attributes: ['user_id', 'first_name', 'last_name', 'email'],});
            return result; 
        } catch (error) {
            throw error;
        }
    }

    static async getById(id){
        try {
            const result = await Users.findByPk(id, 
            {attributes: ['user_id', 'first_name', 'email'],
            include: {
                model: UsersCourses,
                as: 'courses',
                attributes: ['course_id'],
            }
        });
            return result; 
        } catch (error) {
            throw error;
        }
    };

    static async create(newUser){
        try {
            const result = await Users.create(newUser);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(user_id, updateData){
        try {
            const result = await Users.update(updateData, {
                where: {user_id}
            });
        } catch (error) {
            throw error;
        }
    }
};




module.exports = UserServices;