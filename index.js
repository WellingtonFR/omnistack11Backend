const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.json({
        nomeCompleto: {
            nome: "Wellington",
            sobrenome: "de Freitas Rocha"
        },
        idade: 32
    });
});

app.listen(3001);