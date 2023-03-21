import express from 'express'
import usuarioController from './controles/usuarioController.js'
import tarefaController from './controles/tarefaController.js'
import rootController from './controles/rootControler.js';

const app = express();

app.use(express.json());

usuarioController(app);
tarefaController(app);
rootController(app);

export default app;