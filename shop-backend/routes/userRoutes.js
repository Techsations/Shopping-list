const { addItem, viewItem, del } = require("../controllers/userController")

const userRoutes = require ("express").Router()

userRoutes.post("/addItem", addItem)
userRoutes.get("/viewItem", viewItem)
userRoutes.post("/deleteItem", del)


module.exports = userRoutes