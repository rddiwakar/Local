const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

function fileFilter(req, file, cb) {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        console.log("Invalid file type");
        cb(null, false);
    }
}
  
  const upload = multer({ storage, fileFilter })

  module.exports = upload;