import { usuarios } from "../infra/bd.js";

function usuarioController(app){
    app.get('/usuario', exibir);
    function exibir(req, res){
        res.send(usuarios)
    }

    app.get('/usuario/email/:email', buscar);
    function buscar(req, res){
        const usuario = usuarios.find(usuario => usuario.email === req.params.email)
        if(usuario){
            res.send(
                `<h1>Usuário</h1><br/>
                Nome: ${usuario.nome}<br/>
                Email: ${usuario.email}<br/>
                Senha: ${usuario.senha}.`
            )
        } else {
            res.send(`Usuário: ${req.params.email} não encontrado!`);
        }
        res.send(req.params.email)
    }

    app.post('/usuario', inserir);
    function inserir(req, res){
        res.send('Inserindo usuário');
        usuarios.push(req.body)
        console.log(req.body)
    }

}

export default usuarioController;