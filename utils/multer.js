const multer = require("multer");
const DataUri = require("datauri/parser");
const path = require("path");

const storage = multer.memoryStorage();
const dUri = new DataUri();

function fileFilter(req, file, cb) {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        console.log("Invalid file type");
        cb(null, false);
    }
}
  
  const upload = multer({ storage, fileFilter })

  const dataUri = (req) => {
    const file = req.file;

    return dUri.format(
        path.extname(file.originalname).toString(),
        file.buffer
    );
  }

  module.exports = {upload, dataUri};