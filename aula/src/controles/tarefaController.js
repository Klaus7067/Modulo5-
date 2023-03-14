import { tarefas } from "../infra/bd.js";

function tarefaController(app){
    app.get('/tarefa', exibir);
    function exibir(req, res){
        res.send(tarefas)
    }

    app.post('/tarefa', inserir);
    function inserir(req, res){
        res.send('Inserindo tarefa');
        tarefas.push(req.body)
        console.log(req.body)
    }
}

export default tarefaController;