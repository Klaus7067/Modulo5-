// import { usuarios } from "../infra/bd.js";
import sqlite3 from 'sqlite3';
import { open } from 'sqlite'

function usuarioController(app) {
    app.get('/usuario', exibir);
    function exibir(req, res) {
        (async()=>{
            const db = await open({
                filename: './src/infra/bdTarefas.db',
                driver: sqlite3.Database
            })
            const result = await db.all('SELECT * FROM Usuario')
            res.send(result)
        })()
    }

    // app.get('/usuario', exibir);
    // function exibir(req, res) {
    //     (async()=>{
    //         const db = await open({
    //             filename: './src/infra/bdTarefas.db',
    //             driver: sqlite3.Database
    //         })
    //         const sql = 'SELECT * FROM Usuario'
    //         db.each(sql,(err, row)=>{
    //             if(err){
    //                 throw err;
    //             }
    //             res.send(`${row.nome} ${row.email} - ${row.senha}`);
    //         });
    //     })()
    // }

    app.get('/usuario/email/:email', buscarEmail);
    function buscarEmail(req, res) {
        (async()=>{
            const db = await open({
                filename: './src/infra/bdTarefas.db',
                driver: sqlite3.Database
            })
            const result = await db.all('SELECT * FROM Usuario where email like ?', req.params.email)
            if (result!=''){
                res.send(result)
            } else {
                res.send(`Não exite usuário com o email ${req.params.email}`)
            }
            db.close
        })()
        // const usuario = usuarios.find(usuario => usuario.email === req.params.email)
        // if (usuario) {
        //     res.send(
        //         `<h1>Usuário</h1><br/>
        //         Nome: ${usuario.nome}<br/>
        //         Email: ${usuario.email}<br/>
        //         Senha: ${usuario.senha}.`
        //     )
        // } else {
        //     res.send(`Usuário: ${req.params.email} não encontrado!`);
        // }
    }

    app.get('/usuario/nome/:nome', buscarNome);
    function buscarNome(req, res) {
        (async()=>{
            const db = await open({
                filename: './src/infra/bdTarefas.db',
                driver: sqlite3.Database
            })
            const result = await db.all('SELECT * FROM Usuario where nome like ?', req.params.nome)
            if (result!=''){
                res.send(result)
            } else {
                res.send(`Não exite usuário com o nome ${req.params.nome}`)
            }
            db.close
        })()
        // const usuario = usuarios.find(usuario => usuario.email === req.params.email)
        // if (usuario) {
        //     res.send(
        //         `<h1>Usuário</h1><br/>
        //         Nome: ${usuario.nome}<br/>
        //         Email: ${usuario.email}<br/>
        //         Senha: ${usuario.senha}.`
        //     )
        // } else {
        //     res.send(`Usuário: ${req.params.email} não encontrado!`);
        // }
    }

    app.post('/usuario', inserir);
    function inserir(req, res) {
        (async()=>{
            const db = await open({
                filename: './src/infra/bdTarefas.db',
                driver: sqlite3.Database
            })
            await db.run('INSERT INTO Usuario(nome, email, senha) VALUES (?, ?, ?)', req.body.nome, req.body.email, req.body.senha )
            res.send(`Usuário ${req.body.nome}, inserido com sucesso!`)
            db.close
        })()
        // res.send('Inserindo usuário');
        // usuarios.push(req.body)
        // console.log(req.body)
    }

    app.delete('/usuario/email/:email', deletar)
    function deletar(req, res) {
        const usuario = users.find(usuario =>
            usuario.email === req.params.email)
        if (usuario) {
            res.send(`Usuário: ${usuario.nome} deletado`)
            const index = users.indexOf(usuario)
            users.splice(index, 1)
        } else {
            res.send(`Usuário com email: ${req.params.email} não encontrado.`)
        }
    }
    
    app.put('/usuario/email/:email', Atualizar)
    function Atualizar(req, res) {
        const usuario = users.find(usuario =>
            usuario.email === req.params.email)
        if (usuario) {
            res.send(`Usuário: ${usuario.nome} deletado`)
            const index = users.indexOf(usuario)
            users[index].nome = req.body.nome
            users[index].email = req.body.email
            users[index].senha = req.body.senha
        } else {
            res.send(`Usuário com email: ${req.params.email} não encontrado.`)
        }

    }
}
export default usuarioController;