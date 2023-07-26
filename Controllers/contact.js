const contactSchema = require("../Modeles/contact");


exports.home =  (req, res) => {
        try {
          res.send("<h1>We are rocking 🚀</h1>");
        } catch (err) {
          console.log(err);
        }
      }
exports.getAllContact =  async (req, res) => {
    try {
      const contacts = await contactSchema.find();
      res.status(200).send(contacts)
    } catch (err) {
      console.log(err);
      res.status(400).send("there is no users")
    }
  }

  exports.getContactById = async (req, res) => {
    try {
      const {id} = req.params
      const contact = await contactSchema.findById(id);
      res.status(200).send(contact)
    } catch (err) {
      console.log(err);
      res.status(400).send("there is no such user")
    }
  }

  exports.addContact = async (req, res) => {
    try {
      const newConatct = new contactSchema(req.body);
      await newConatct.save();
      res.status(200).send("User added succesfully");
    } catch (err) {
      res.status(500)
      console.log(err);
    }
  }

  exports.editContact = async (req, res) => {
    try {
      const {id} = req.params
      const oldContact = await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
      res.status(200).send(`user updated succesfully : ${oldContact}`)
    
    } catch (err) {
      res.status(500).send("can't update")
      console.log(err);
    }
  }
  

  exports.deleteContact = async (req, res) => {
    try {
      const {id} = req.params
      const oldContact = await contactSchema.findByIdAndRemove(id)
      res.status(200).send(`user has been removed `)
  
  
    } catch (err) {
      res.status(500).send("can't remove")
      console.log(err);
    }
  }

