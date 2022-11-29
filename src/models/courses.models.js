const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Categories = require('./categories.models');

const Courses = db.define('courses', {

    course_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },

    
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: true
    },

    instructor: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,

        field: "cotegory_id",
    }

});

module.exports = Courses;