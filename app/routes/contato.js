module.exports = function(app) {
    var controller = app.controllers.contato;
    app.get('/contatos', controller.listaContatos);
    app.get('/contato/:id', controller.obtemContato);
};