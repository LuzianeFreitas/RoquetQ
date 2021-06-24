const express = require('express');
const route = require('./route');
const path = require('path')

const server = express();

/**Dizendo para o server que a view engine será o ejs */
server.set('view engine', 'ejs');
server.use(express.static('public'))

/**Caminho da pasta views */
server.set('views', path.join(__dirname, 'views'));

/**midler */
server.use(express.urlencoded({extended: true}));
server.use(route);

server.listen(3000, () => {
    console.log('RODANDO...');
})