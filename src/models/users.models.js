const db = require('../utils//database');
const bcrypt = require('bcrypt');

const {DataTypes} = require("sequelize");


const Users = db.define('users', {
    user_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },

    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

},{

     hooks: {

         beforeCreate: (user, options) => {
             const {password} = user;
             const hash = bcrypt.hashSync(password, 8);
             user.password = hash;  
        },  
     },
 
});

module.exports = Users;
