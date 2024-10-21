const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API de Sistemas de gerenciamento de estoques',
    description: 'Documentação da API ',
  },
  host: 'localhost:3000', // Substitua pela URL do seu servidor
  schemes: ['http'], // Pode ser https se for o caso
};

const outputFile = './swagger_output.json'; // Arquivo onde será gerada a documentação
const endpointsFiles = [
    './src/app.js',
    './src/routers/ClienteRouter.js',
    './src/routers/PedidoRouter.js',
    './src/routers/ProdutoRouter.js',
    './src/routers/DetalhePedidoRouter.js',
  ];
  

// Gerar a documentação automaticamente
swaggerAutogen(outputFile, endpointsFiles, doc);
