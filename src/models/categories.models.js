const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Categories = db.define('categories', {

    category_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});


module.exports = Categories;