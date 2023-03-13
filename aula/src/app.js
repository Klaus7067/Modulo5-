import express from 'express'
import usuarioController from './controles/usuarioController.js'
import tarefaController from './controles/tarefaController.js'

const app = express();

app.use(express.json());

usuarioController(app);
tarefaController(app);

export default app;