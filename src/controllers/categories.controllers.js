const {CategoryServices} = require('../services');


const createCategory = async (req, res, next) => {
    try {
        const newCategory = req.body;
        const result = await CategoryServices.addCategory(newCategory);
        res.status(201).json(result)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message:"La categoria no pudo ser agregada"
        })
    }
}

const deleteCategory = async (req,res, next) => {
    try {
        const {category_id} = req.body;
        const result = await CategoryServices.deleteCategoryNow(category_id);
        res.status(204).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "La categoria no pudo ser borrada"
        })
    }
}


module.exports = {
    createCategory,
    deleteCategory,
}