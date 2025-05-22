
const dados = require('./dados');

function processarComando(mensagem) {
  const partes = mensagem.trim().split('|');
  const comando = partes[0];

  if (comando === 'CRIAR') {
    const titulo = partes[1];
    const tarefa = dados.criarTarefa(titulo);
    console.log(`Tarefa criada: ${JSON.stringify(tarefa)}`);
    return `Tarefa criada ${tarefa.id}\n`;

  } else if (comando === 'LISTAR') {
    const tarefas = dados.listarTarefas();
    console.log("Listando tarefas...");
    if (tarefas.length === 0) {
      return "Nenhuma tarefa encontrada.\n";
    }
    return tarefas.map(t => `ID: ${t.id} - Título: ${t.titulo}`).join('\n') + '\n';

  } else if (comando === 'DELETAR') {
    const id = parseInt(partes[1]);
    const removida = dados.deletarTarefa(id);
    if (removida) {
      console.log(`Tarefa deletada: ${JSON.stringify(removida)}`);
      return `Tarefa ${id} deletada.\n`;
    } else {
      console.log(`Tentativa de deletar tarefa não encontrada (ID ${id})`);
      return `Tarefa ${id} não encontrada.\n`;
    }

  } else {
    console.log(`Comando inválido recebido: ${mensagem}`);
    return 'Comando inválido.\n';
  }
}

module.exports = { processarComando };
