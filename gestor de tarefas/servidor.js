
const net = require('net');
const processamento = require('./processamento');

const servidor = net.createServer((socket) => {
  console.log('Cliente conectado.');

  socket.on('data', (dados) => {
    const mensagem = dados.toString().trim();
    console.log(`Mensagem recebida do cliente: ${mensagem}`);
    
    const resposta = processamento.processarComando(mensagem);
    socket.write(resposta);
  });

  socket.on('end', () => {
    console.log('Cliente desconectado.');
  });
});

servidor.listen(5000, () => {
  console.log('Servidor ouvindo na porta 5000');
});
