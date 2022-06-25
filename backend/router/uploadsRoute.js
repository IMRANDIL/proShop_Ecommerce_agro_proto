import express from "express";
import path from "path";
const router = express.Router();

import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "client/public/uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const fileTypes = /jpg|jpeg|png/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimeType = fileTypes.test(file.mimetype);

  if (extName && mimeType) {
    return cb(null, true);
  } else {
    return cb("Images Only");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post("/", upload.single("image"), (req, res) => {
  res.send(`/uploads/${req.file.filename}`);
});

export default router;
