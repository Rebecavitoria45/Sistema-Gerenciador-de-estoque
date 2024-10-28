# Sistema de Gerenciamento de Estoque

Este é um sistema de gerenciamento de estoque desenvolvido em Node.js, utilizando JWT para autenticação e documentado com Swagger.O projeto foi implantado no [Render](https://sistema-gerenciador-de-estoque.onrender.com/).

## 🔍 Visão Geral

O Sistema de Gerenciamento de Estoque facilita o gerenciamento de clientes, pedidos e produtos, permitindo que empresas acompanhem o fluxo de estoque. Ele possui uma API RESTful documentada com Swagger e protegida com JWT.

## ⚙️ Funcionalidades

- **CRUD de Usuários, Clientes, Pedidos, Produtos e Detalhes de Pedido**
- **Autenticação com JWT**: Tokens seguros para proteger as rotas do sistema.
- **Documentação da API**: Interface amigável e interativa para testar endpoints através do Swagger.

## 🛠 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do servidor.
- **JavaScript**: Linguagem de programação principal.
- **JWT (JSON Web Token)**: Autenticação segura de usuários.
- **Swagger**: Documentação interativa da API.
- **Render**: Plataforma de hospedagem para o deploy do projeto.

## 📂 Modelos

O projeto inclui as seguintes entidades:

1. **Usuário**: Gerenciamento de credenciais de acesso e autenticação.
2. **Cliente**: Informações dos clientes que realizam pedidos.
3. **Pedido**: Armazena detalhes dos pedidos realizados por clientes.
4. **Produto**: Gerenciamento dos produtos disponíveis no estoque.
5. **Detalhe do Pedido**: Relação entre pedidos e produtos, com quantidades e valores.

## 🔒 Autenticação

A autenticação da API é feita por meio de JWT. Para acessar as rotas protegidas, é necessário:

1. **Obter um token de autenticação**: Realize login através do endpoint de login, onde o sistema retorna um token JWT.
2. **Incluir o token no cabeçalho `Authorization` das requisições**: Utilize o formato `Bearer <seu_token>` no cabeçalho `Authorization`.

Este token permite que você acesse as rotas protegidas e mantenha a segurança dos dados.

## 🌐 Deploy

O projeto foi implantado no Render e está disponível para acesso público. Acesse o link abaixo para visualizar a aplicação em execução:

- [Sistema de Gerenciamento de Estoque - Deploy](https://sistema-gerenciador-de-estoque.onrender.com)
  

## 📱👩‍💻 Contato
 ### Autora: Rebeca vitória
   ### Email: bebecavitoria4738@gmail.com
   ### Linkedin: https://www.linkedin.com/in/rebecavitoriadev/
