const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Courses = require('./courses.models');

const Videos = db.define('videos', {
    video_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    url: {
        type: DataTypes.STRING,
        allowNull: true
    },

    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: "id",
            model: Courses,
        },
        field: "course_id",
    }
    
});

module.exports = Videos;
