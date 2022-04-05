const { Schema, model } = require("mongoose");

const schema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    cantidad: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
});

module.exports = {
    myModel: model("Productos", schema),
};
