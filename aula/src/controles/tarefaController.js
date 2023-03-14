import Tarefa from "../models/Tarefa.js";
function tarefaController(app){
    app.get('/tarefa', exibir);
    function exibir(req, res){

        const tarefa1 = new Tarefa('cozinhar', 'fazer a janta', 'iniciando', '31/01/2023');

        res.send(tarefa1)
    }

    app.post('/tarefa', inserir);
    function inserir(req, res){
        res.send('Inserindo tarefa');
        console.log(req.body)
    }
}

export default tarefaController;