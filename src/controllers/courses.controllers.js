const { CourseService } = require("../services")


const getAllCourse = async (req, res, next) => {
    try {
        const result = await CourseService.getAll();
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'No se pudo completar la peticion'
        });
    }
}

const createCourse = async (req, res, next) => {
    try {
        const newCourse = req.body
        const result = await CourseService.addCourse(newCourse);
        res.json(result)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "El curso no pudo ser creado"
        })
        
    }
};

const editCourse = async (req, res, next) => {
    try {
        const {course_id} = req.params;
        const {description} = req.body;
        console.log(course_id);
        console.log(description);
        const result = await CourseService.updateCourse( description, course_id );
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Course can't be editing"
        })
    }
}


module.exports = {
    getAllCourse,
    createCourse,
    editCourse,
}