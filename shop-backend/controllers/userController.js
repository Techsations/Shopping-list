const userModel = require("../models/user.model");

const addItem = async(req, res)=>{
    let { item, amount, quantity, subtotal} = req.body 
    try {
        const newUser = new userModel({
            item,
            amount,
            quantity,
            subtotal
        })

        const result = await newUser.save()
        console.log(result)
        return res.status(201).send({ message: "Item added Successful", status: true })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "Internal server error", status: false })
    }
}

const viewItem = async(req, res)=>{
    try {
        const users = await userModel.find({}, {item: 1, amount: 1, quantity: 1, subtotal: 1})
        console.log(users)
        res.status(200).send(users)
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "Internal server error", status: false })
    }
}

module.exports = {addItem, viewItem}

