const express = require('express');
const app = express();
const por = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.status(200).json({
        message: 'Hola Universo'
    })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})