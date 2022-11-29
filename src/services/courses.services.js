const {Courses, Categories, Videos} = require('../models');


class CourseService {
    static async getAll(){
        try {
            const result = await Courses.findAll({
                attributes: ['course_id', 'title', 'category_id'],
                include: [
                    {
                    model: Categories,
                    attributes: ['name'],
                    as: "category",
                    },
                    {

                        model: Videos,
                        attributes: ['url'],
                        as: "videos",
                    },  
            ],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async addCourse(newCourse) {
        try {
            const result = await Courses.create(newCourse);
            return result;
        } catch (error) {
            throw error;
        }
    }


    static async updateCourse( description, course_id ) {
        try {
            const result = await Courses.update(description,
                {where: {course_id}
            }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = CourseService;