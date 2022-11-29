const {Users, Categories, Courses, UsersCourses, Videos} = require('./index');



const initModels = () => {
    Users.belongsToMany(Courses, {through: 'usersCourses'});
    Courses.belongsToMany(Users, {through: 'usersCourses'});

    Categories.hasMany(Courses, {as: "courses", foreignKey: "category_id"});
    Courses.belongsTo(Categories, { as: "category", foreignKey: "category_id"});

    Courses.hasMany(Videos, {as: "videos", foreignKey: "course_id" });
    Videos.belongsTo(Courses, {as: "course", foreignKey: "course_id"});

    // Users.hasMany(UsersCourses, {as: "courses", foreignKey: "user_id"});
    // UsersCourses.belongsTo(Users, {as: "student", foreignKey: "user_id"});

    // Courses.hasMany(UsersCourses, {as: "students", foreignKey: "course_id"});
    // UsersCourses.belongsTo(Courses, {as: "courses", foreignKey: "course_id"});

};


module.exports = initModels; 