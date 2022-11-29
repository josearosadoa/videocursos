const {VideoServices} = require('../services')


const createVideo = async (req, res, next) => {
    try {
        const newVideo = req.body;
        const result = await VideoServices.addVideo(newVideo);
        res.json(result)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "El video no pudo ser creado"
        })
    }
};

const deleteVideo = async (req, res, next) => {
    try {
        const {video_id} = req.body;
        const result = await VideoServices.deleteVideoNow(video_id);
        res.status(204).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "El usuario no pudo ser borrado"
        })
    }
}

module.exports = {
    createVideo,
    deleteVideo,
}