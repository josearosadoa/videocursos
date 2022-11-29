const db = require("../utils/database");
const {Users, Categories, Courses, Videos, UsersCourses} = require("../models");
const initModels = require("../models/init.models");


initModels();




const users = [
    {
        first_name: "Juan Alberto",
        last_name: "Ortega",
        email: "jortega@gmail.com",
        password: "12494323"
    },

    {
        first_name: "Ariel ",
        last_name: "Guzman",
        email: "aguzman@gmail.com",
        password: "3940223"
    },

    {
        first_name: "Alexa",
        last_name: "Rodriguez",
        email: "arodriguez@gmail.com",
        password: "254359443"
    },
];
    

const userscourses = [
    { userId: 1, courseId: 3},
    { userId: 2, courseId: 1},
    { userId: 3, courseId: 3}
];



const categories = [
    {name: "Colaboracion" },
    {name: "Data center" },
    {name: "Seguridad" },
    {name: "Redes" },
    {name: "Help desk" },
    {name: "Soporte TI" },
];



const courses = [
    {
        title: "UCCE",
        description: "Fundamentos basicos de UCCE",
        instructor: "David Gonzales",
        categoryId: 1
    },

    {
        title: "UCCX",
        description: "Fundamentos basicos de UCCX",
        instructor: "David Gonzales",
        categoryId: 1
    },

    {
        title: "Pentesting",
        description: "Proceso de pentesting",
        instructor: "Daniel Echeverry",
        categoryId: 3
    },
];



const videos = [
    {
        title: "Video 1 pentesting",
        courseId: "3"
    },

    {
        title: "Video 1 UCCE",
        courseId: "1"
    },

    {
        title: "Video 1 uccx",
        courseId: "3"
    },

    
  
];





db.sync({force: false})
.then(() => {
console.log('sincronizado');
users.forEach(async(user) => await Users.create(user));
setTimeout(() => {
    categories.forEach(async(category) => await Categories.create(category)
    );
},100);

setTimeout(() => {
    courses.forEach(async(course) => await Courses.create(course)
    );
},200);
setTimeout(() => {
    userscourses.forEach( async (usercourse) => await UsersCourses.create(usercourse)
    );
},300);
setTimeout (() => {
    videos.forEach( async (video) => await Videos.create(video)
    );
},400);
});

