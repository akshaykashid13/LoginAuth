const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

router.post("/addcontact", (req, res) => {

    Contact.findOne({ phone: req.body.phone }).then(usercontact => {
          const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            userid: req.body.userid,
            address: req.body.address
          });
          newContact
          .save()
          .then(usercontact => res.json(usercontact))
          .catch(err => console.log(err));
        
      });
    });

router.get('/getcontact' , (req,res) => {
  Contact.find({userid: req.body.userid}).sort({name: 1}).limit(5)
  .then(result => res.json(result))
  .catch(err => console.log(err))
})
    module.exports = router;
  