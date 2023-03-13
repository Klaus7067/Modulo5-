import express from 'express'
import usuarioController from './models/controles/usuarioController.js'
import tarefaController from './models/controles/tarefaController.js'

const app = express();

app.use(express.json());

usuarioController(app);
tarefaController(app);

export default app;