const { response, request } = require('express');

const usuarioGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey } = req.query;
    res.json({
        msg: 'get api - controlador',
        oscar: 'es el mejor',
        q,
        nombre,
        apikey
    });
}
const usuarioPut = (req, res) => {

    const { id } = req.params;
    res.json({
        msg: 'put api ',
        id
    });
}
const usuarioDelete = (req, res) => {
    res.json({
        msg: 'delete api '
    });
}
const usuarioPost = (req, res) => {

    const body = req.body;

    res.json({
        msg: 'post api ',
        body
    });
}
module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioDelete,
    usuarioPost,

}