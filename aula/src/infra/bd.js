import Usuario from "../models/Usuario.js";
import Tarefa from "../models/Tarefa.js";

//As duas variávies
const usuarios= [];
const tarefas = [];

//criando usuarios
const naruto = new Usuario('naruto', 'uzumaki@naruto', '123456789');
usuarios.push(naruto); //incluindo o usuario naruto em usuarios[]
const kakashi = new Usuario('kakashi', 'hatake@kakashi', '987654321');
usuarios.push(kakashi); //incluindo o kakashi naruto em usuarios[]

//criando tarefas
const dataAtual = new Date()
const cozinhar = new Tarefa('cozinhar', 'fazer a janta', 'iniciando', dataAtual);
tarefas.push(cozinhar) //incluindo a tarefa cozinhar em tarefas[]
const louca = new Tarefa('lavar', 'lavar a louça', 'andamento', dataAtual);
tarefas.push(louca) //incluindo a tarefa louça em tarefas[]

export{usuarios, tarefas}