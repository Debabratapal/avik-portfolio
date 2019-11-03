const router = require('express').Router();
const Image = require('../models/image');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const ImageCategory = require('../models/image-category');

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
    return Promise.reject("categoty is not there");
  } 
  
  ImageCategory.findOne({id: category})
  .then(data => {
    if(data && data.id) {
      const categoryId = data._id;
      return categoryId;
    } else {
      return Promise.reject("categoty is not there");
    }
  })
  .then(id => {
    let image = new Image({
      path: req.file.filename,
      createdAt: Date.now(),
      category: id,
    })
    image.save().then(data => {
      console.log(data);
      res.json({status: true});
    })
  })
  .catch(err => {
    res.send(err);
  })
});

router.get('/:id', (req, res) => {
  console.log('came');
  
  let index = +req.params.id;
  index = index -1;
  ImageCategory.find().lean().then(categories => {
    if(!index) {
      index = Math.floor(Math.random()*3);
    }
    let category = categories[index]; 
    return category._id;
  })
  .then(category => {
   
    Image.find({category: category}).then(data => {
      console.log(data);
      
      if(Array.isArray(data)) {
        res.send(data);
      }
    })
  })
  .catch(err => {
    res.send(err);
  })
})


module.exports = router;