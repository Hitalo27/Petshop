const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const User = require("./models/Cadastro_Cliente");
const Pet = require("./models/Cadastro_Pet");
var hbs = handlebars.create({
    /* configuração */
  });


  const port = 8081;


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


//SingUp
let usuarioLogado = ""
let petsCliente = ""


    // Rotas

    //Rota para validar Login
app.post("/loginHome", function (req, res) {
  var metodoEntrada = req.body.metodoEntrada;
  var senha = req.body.senha;
  switch (metodoEntrada) {
      case "Cliente":
          User.findOne({ where: { cpf: req.body.dadosEntrada } }).then(function (dados) {
              if (dados == null) {
                  res.send("não foi possível fazer login")

              } else if (senha != dados.senha) {
                  res.send("senha incorreta")
              } else {
                  res.render("menu-cliente", { dados: dados })
                  usuarioLogado = dados
              }
          }).catch(function (erro) {
              res.send("houve um erro no login" + erro)
          });
          break;

      case "Admin":
          CadastrarCliente.findOne({ where: { cpf: req.body.dadosEntrada } }).then(function (dados) {
              if (dados == null) {
                  res.send("não foi possível fazer login")

              } else if (senha != dados.senha) {
                  res.send("senha incorreta")
              } else if (senha == dados.senha & dados.isAdmin == 1) {
                  res.render("menu-adm", { dados: dados })
                  usuarioLogado = dados
              } else {
                  res.send("houve um erro no login" + erro)
              }
          }).catch(function (erro) {
              res.send("houve um erro no login" + erro)
          });
          break;
        }
      })

    app.get("/", function (req, res) {
      res.sendFile('index.html', {root: __dirname});
  });

 
   //Rota cliente logado
   app.post("/menuCliente", function (req, res) {
    res.render("menu-cliente", { dados: usuarioLogado })
})


    app.post("/cadastrar-pet", function (req, res) {
        res.render("CadastroPet");
      });

      //Rota para SELECT dos pets do usuário
app.post("/meus-pets", function (req, res) {
    Pet.findAll({ where: { usuario_id_fk: usuarioLogado.id, } }).then(function(pets) {
        res.render("meus-pets", { pets: pets, dados: usuarioLogado })
        petsCliente = pets
    })
})

      /*app.post("/meus-pets", function (req, res) {
        res.render("meus-pets", { dados: usuarioLogado });
      });
*/

// Rota para SELECT * na tabela de paceiros cadastrados
app.post("/contratar-servico", function (req, res) {
    Pet.findAll({
        
    }
    ).then(function (parceiros) {
        res.render("contratar-servico", {
            pets: petsCliente

        })
        //console.log(parceiros)
        //console.log(usuarioLogado)
        //console.log(eventosCliente)
    })
})

      app.post("/add", function (req, res){
        User.create({
          CPF: req.body.cpf,
          p_nome: req.body.pNome,
          sobre_nome: req.body.sobreNome,
          email: req.body.email,
          telefone: req.body.telefone,
          senha: req.body.senha,
        }).then(function(){
            res.redirect('/')
        });
      });

      app.post("/sdd", function (req, res){
        Pet.create({
            nome: req.body.name,
            peso: req.body.peso,
            idade: req.body.idade,
            raça: req.body.raca,
            usuario_id_fk: usuarioLogado.id
        }).then(function(){
            res.redirect(307, '/meus-pets')
        })
      });

      //Rota apra Logout
app.post("/logOut", function (req, res) {
    usuarioLogado = ""
    res.redirect("/")
})


app.listen(port, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});
//localhost:8081 
