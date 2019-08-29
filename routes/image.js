const router = require('express').Router();
const Image = require('../models/image');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const mimeMap = {
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
  'image/png': 'png'
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const filePath = path.resolve('public','images', 'uploads');
    if(!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath)
    }
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    cb(null, `avik2510-${Date.now()}.${mimeMap[file.mimetype]}`)
  }
})

const upload = multer({storage: storage}).single('image');

router.post('/', upload, (req, res) => {
  let image = new Image({
    path: req.file.filename,
    createdAt: Date.now(),
    category:req.body.category,
  })
  image.save().then(data => {
    res.json({status: true});
  })
});

router.get('/', (req, res) => {
  Image.find().then(data => {
    res.send(data);
  })
})


module.exports = router;