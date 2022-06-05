# Introdução
A criação desse projeto se deu por conta de uma dúvida que me surgiu: "Tem como copiar uma página HTML pela url com um script simples?"
Como você pode ver nesse repositório, a resposta é sim!

# O que o script faz?
- Com uma dom virtual, criada com o uso da biblioteca JSDom, o script gera um arquivo 'index.html' que armazena uma cópia da página web escolhida.

# Como utilizar
### Clonando o projeto
```
$ git clone https://github.com/barbosamaatheus/website-duplicator
$ cd website-duplicator
```
### Iniciando o projeto
```
$ npm install
$ cd src
$ node index.js
```
### Como alterar o site escolhido?
- Você precisa alterar a url na linha 5 do script:
  `
  $ await axios.get('URL digitada aqui').then(res => {
  `
