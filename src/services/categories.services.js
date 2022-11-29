
const { Categories } = require("../models");



class CategoryServices {
    static async addCategory(newCategory){
        try {
            const result = await Categories.create(newCategory);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async deleteCategoryNow(category_id){
        try {
            const result = await Categories.destroy({
                where: {category_id}
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = CategoryServices;