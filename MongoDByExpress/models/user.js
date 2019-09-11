const mongo2 = require("mongoose");

const userScheme = new mongo2.Schema({

    nombre: {type: String},
    area : {type: String},
    edad: {type: String},
    precio: {type: String},

});

module.exports = mongo2.model("productos", userScheme);
