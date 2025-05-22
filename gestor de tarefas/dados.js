
let tarefas = [];
let idAtual = 1;

function criarTarefa(titulo) {
  const tarefa = { id: idAtual++, titulo };
  tarefas.push(tarefa);
  return tarefa;
}

function listarTarefas() {
  return tarefas;
}

function deletarTarefa(id) {
  const indice = tarefas.findIndex(t => t.id === id);
  if (indice !== -1) {
    return tarefas.splice(indice, 1)[0];
  }
  return null;
}

module.exports = { criarTarefa, listarTarefas, deletarTarefa };
