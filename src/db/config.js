const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

module.exports = () =>{
    /** Configuração do banco de dados */
    /** Abrindo a conexão com bd */
    open({
        filename: '/src/db/rocketq.sqlite',
        driver: sqlite3.Database,/** O driver é reponsável por comandar o bd */
    });
}