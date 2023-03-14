import { usuarios } from "../infra/bd.js";

function usuarioController(app){
    app.get('/usuario', exibir);
    function exibir(req, res){
        res.send(usuarios)
    }

    app.post('/usuario', inserir);
    function inserir(req, res){
        res.send('Inserindo usuário');
        usuarios.push(req.body)
        console.log(req.body)
    }
}

export default usuarioController;