const { Videos } = require("../models");


class VideoServices {
    static async addVideo(newVideo){
        try {
            const result = await Videos.create(newVideo);
            return result;
        } catch (error) {
            throw error;
            
        }
    }

    static async deleteVideoNow(video_id){
        try {
            const result = await Videos.destroy({
                where: {video_id}
            });
            return result
        } catch (error) {
            throw error;
        }
    }
}


module.exports = VideoServices;