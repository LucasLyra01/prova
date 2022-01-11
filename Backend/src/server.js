require('dotenv').config({
    path: '.env'
});

const express = require('express');
const cors = require('cors');
const Mongo = require('./infra/mongodb');

const app = express();

const port = process.env.APP_PORT;
const hostname = process.env.APP_HOST;

app.use(cors());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

const cadastroRoutes = require('./routes/cadastro-routes');

app.use('/api/cadastro', cadastroRoutes);

app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Servidor funcionando corretamente'
    });
});

app.listen(port, hostname, () => {
    console.log(`O servidor está rodando no endereço: http://${hostname}:${port}`)
});