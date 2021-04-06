const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userClientes = '/api/user-cliente';

        //middlewars
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
        //cors
        this.app.use(cors());

        //crud de api
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.userClientes, require('../routes/user-cliente'))
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server