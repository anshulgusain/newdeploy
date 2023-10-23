const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://anshulgusain99:twRvaJ8MCWI10jMg@cluster0.vwiwavz.mongodb.net/foodapp")

module.exports={
    connection
}