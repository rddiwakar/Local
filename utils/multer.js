const multer = require("multer");
//const DataUri = require("datauri/parser");
// const path = require("path");
// const dUri = new DataUri();

// const storage = multer.memoryStorage();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'utils/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

function fileFilter(req, file, cb) {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        console.log("Invalid file type");
        cb(null, false);
    }
}

const upload = multer({ storage, fileFilter });

// const dataUri = (req) => {
//    return dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
// }
module.exports = { 
    upload, 
    // dataUri 
};