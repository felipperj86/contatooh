function verificarAutenticacao(req, res, next){

    console.log("verificarAutenticacao");

    if(req.isAuthenticated()){

        console.log("isAuthenticated");

        return next();
    } else {

        console.log("Não Autorizado");

        res.status("401").json("Não Autorizado");
    }
}


module.exports = function(app){

    var controller = app.controllers.contato;

    app.route("/contatos")
        .get(verificarAutenticacao, controller.listaContatos)
        .post(verificarAutenticacao, controller.salvaContato);


    app.route("/contatos/:id")
        .get(verificarAutenticacao, controller.obtemContato)
        .delete(verificarAutenticacao, controller.removeContato);
};  