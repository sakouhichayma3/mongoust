const express = require("express");
const {
  home,
  getAllContact,
  getContactById,
  addContact,
  editContact,
  deleteContact,
} = require("../Controllers/contact");

const appRouter = express.Router();

appRouter.get("/", home);

appRouter.get("/allcontact", getAllContact);

appRouter.get("/get/:id", getContactById);

appRouter.post("/add", addContact);

appRouter.put("/edit/:id", editContact);

appRouter.delete("/delete/:id", deleteContact);

module.exports = appRouter;
