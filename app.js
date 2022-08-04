const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const User = require("./models/Cadastro_Cliente");
const Pet = require("./models/Cadastro_Pet");
var hbs = handlebars.create({
    /* configuração */
  });

// Config
    //Template Engine
    app.engine("handlebars", hbs.engine);
    app.set("view engine", "handlebars");
    

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    // src_public
    app.use(express.static(__dirname + "/src_public"))
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
    //app.set('views', '/src_public')

    // Rotas

    app.get("/", function (req, res) {
      res.sendFile('index.html', {root: __dirname});
  });

  app.post('/petshop', function (req,res){
    res.render('index')
  })

    app.get("/pet", function (req, res) {
        res.render("CadastroPet");
      });

    app.get("/cad", function (req, res) {
        res.render("CadastroCliente");
      });

      app.post("/add", function (req, res){
        User.create({
            nome: req.body.name,
            senha: req.body.senha,
            email: req.body.email,
            telefone: req.body.telefone
        }).then(function(){
            res.redirect('/')
        }).catch(function(){
            res.send("Houve um erro " + erro)
        })
      });

      app.post("/sdd", function (req, res){
        Pet.create({
            nome_pet: req.body.name,
            peso_pet: req.body.peso,
            idade_pet: req.body.idade,
            raça_pet: req.body.raca
        }).then(function(){
            res.redirect('/')
        }).catch(function(){
            res.send("Houve um erro " + erro)
        })
      });


app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});
//localhost:8081
