const mongoose = require('mongoose');

const cadastroSchema = mongoose.Schema({
    nome: {
        type: mongoose.Schema.Types.String,
        required: true
    },
});

let cadastro = module.exports = mongoose.model('cadastro', cadastroSchema);

module.exports.get = (callback, limit) => {
    cadastro.find(callback).limit(limit);
};