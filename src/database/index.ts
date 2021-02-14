import { createConnection } from 'typeorm';

const conexao = async () => {
  try {
    const statusConexao = await createConnection(); // chama o método para criar conexão
    console.log(
      `Status da conexão com o banco de dados: ${statusConexao.isConnected}` // exibe o status true ou false
    );
  } catch (error) {
    // captura algum erro e mostra na tela
    console.log({ status: 'Erro no servidor', error });
  }
};

conexao(); // executa a constante
