import express from 'express'
import usuarioController from './controles/usuarioController.js'
import tarefaController from './controles/tarefaController.js'
import banco from '../src/infra/bd.js'

const app = express();

app.use(express.json());

usuarioController(app, banco);
tarefaController(app, banco);

export default app;