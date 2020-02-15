const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    lista: [{
        id: Number,
        qtd: Number,
        desc: String,
    }],
    end: {
        nome: String,
        cep: String,
        num: String,
        logradouro: String,
        bairro: String,
        comp: String,
        tel: String,
        UF: String, 
        cidade: String,
        loc: {
            latitude: Number,
            longitude: Number,
        }
    },
    obs: {
        text: String,
        market: String,
    },
    data: String,
    dataEntrega: String,
    done: Boolean
});

module.exports = mongoose.model('Order', OrderSchema);