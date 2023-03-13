function usuarioController(app){
    app.get('/usuario', exibir);
    function exibir(req, res){
        res.send('Exibindo usuário')
    }

    app.post('/usuario', inserir);
    function inserir(req, res){
        res.send('Inserindo usuário');
        console.log(req.body)
    }
}
export default usuarioController;