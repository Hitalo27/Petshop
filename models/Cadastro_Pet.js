const db = require('./db')

const Pet = db.sequelize.define('animal',{
    nome_pet: {
        type: db.Sequelize.STRING
    },
    peso_pet:{
        type: db.Sequelize.INTEGER
    },
    idade_pet: {
        type: db.Sequelize.INTEGER
    },
    raça_pet: {
        type: db.Sequelize.STRING
    }
})


module.exports = Pet

//Pet.sync({force: true})