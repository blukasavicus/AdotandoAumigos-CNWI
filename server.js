const express = require ('express')
const server = express()
const bodyParser = require('body-parser')
//Importar para ter acesso ao caminho dos arquivos
const path = require('path')
//Expor arquivos estáticos..
server.use(express.static('public'))
server.use(express.json()) //Possibilidade de usar JSON

server.use(bodyParser.urlencoded({extended:true}))

server.get('/index.html', (req, res) => {
   res.sendFile(path.join(__dirname, 'views/index.html'))
})
server.get('/cadastro.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/cadastro.html'))
 })
 server.get('/filhotes.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/filhotes.html'))
 })
server.listen(3000, () => {
    console.log("servidor no ar...")
})