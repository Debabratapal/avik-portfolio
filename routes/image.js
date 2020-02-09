const router = require('express').Router();
const Image = require('../models/image');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const im = require('imagemagick');
const exac = require('child_process').exec;

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
  const category = req.body.category;
  if(!category) {
    return res.send("categoty is not there");
  } 
  let imagePath = '/images/uploads/'+req.file.filename;
  let image = new Image({
    path: imagePath,
    createdAt: Date.now(),
    category: category,
  })
  image.save().then(data => {
    console.log(data);
    res.json({status: true});
    reduceImageSize(path.join(__dirname, imagePath));
  })

  .catch(err => {
    res.send(err);
  })
});

router.get('/:id', (req, res) => {
  let category = req.params.id;
  Image.find({category:category}).then(data => {
    console.log(data);
    if(Array.isArray(data)) {
      res.send(data);
    }
  })
  .catch(err => {
    res.send(err);
  })
})

const reduceImageSize = (image) => {
  const convertArgs = [image, '-resize', 300+'x'+300, image];
  const logoArgs = [
    'composite', 
    '-disolve', '50%',
    '-gravity', 'SouthEast',
    '-quality'
  ]
  im.convert(convertArgs, (err, md) => {

  })

}


module.exports = router;