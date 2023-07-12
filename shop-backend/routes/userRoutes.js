const { addItem, viewItem } = require("../controllers/userController")

const userRoutes = require ("express").Router()

userRoutes.post("/addItem", addItem)
userRoutes.get("/viewItem", viewItem)


module.exports = userRoutes