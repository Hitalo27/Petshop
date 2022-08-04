const db = require('./db')

const User = db.sequelize.define('usuarios',{
    nome: {
        type: db.Sequelize.STRING
    },
    senha:{
    type:db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.FLOAT
    }
})


module.exports = User

//User.sync({force: true})
