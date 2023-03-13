import Usuario from "../models/Usuario.js";

function usuarioController(app){
    app.get('/usuario', exibir);
    function exibir(req, res){

        const usuario1 = new Usuario('naruto', 'naruto@uzumaki', '123456789');
        
        res.send(usuario1)
    }

    app.post('/usuario', inserir);
    function inserir(req, res){
        res.send('Inserindo usuário');
        console.log(req.body)
    }
}

export default usuarioController;