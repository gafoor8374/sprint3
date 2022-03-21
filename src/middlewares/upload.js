const path = require("path");
const multer= require("multer");

const req = require("express/lib/request");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../uploads'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })

  function fileFilter (req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `false`, like so:

    if(file.mimetype==="image/jpeg"||file.mimetype==="image/png"){
        cb(null, true)
    }else{
cb(new Error("incorect mime type"))
    }
    


  
    // To accept the file pass `true`, like so:
    
  
    // You can always pass an error if something goes wrong:
    cb(new Error('I don\'t have a clue!'))
  
  }


  const options={
      storage,
      fileFilter,
      limit:{
          fileSize:10*10*5
      }
  }

  const uploads =multer(options);
module.exports=uploads