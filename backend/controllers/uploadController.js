
const getUpload = async (req, resizeBy, next) => {
    try {
        const uplaodList = [
            {"id": 1, "desc": "Uplaod 1", "date": "19/03/2025"},
            {"id": 2, "desc": "Uplaod 2", "date": "19/03/2025"},
        ];
        resizeBy.json(uplaodList);
    }catch(error){
        next(error)
    }
};

export{getUpload};