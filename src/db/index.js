const mongoose = require("mongoose");
const { config } = require("../config");

function DB() {
    const uri = `mongodb+srv://${config.MONGO.USER}:${config.MONGO.PASSWORD}@${config.MONGO.HOST}/${config.MONGO.DB}?retryWrites=true&w=majority`;
    console.log(uri);
    mongoose
        .connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(() => {
            console.log("Se conecto");
        });
}
module.exports = DB;
