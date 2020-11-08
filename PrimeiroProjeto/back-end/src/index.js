const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.json({ message: 'Olá Familia '})
});

app.listen(3333);