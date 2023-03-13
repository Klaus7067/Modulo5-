function tarefaController(app){
    app.get('/tarefa', exibir);
    function exibir(req, res){
        res.send('Exibindo tarefas')
    }

    app.post('/tarefa', inserir);
    function inserir(req, res){
        res.send('Rota POST de tarefa ativada: tarefa adicionada ao BD')
    }
}

export default tarefaController;