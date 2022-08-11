const db = require('./db')

const User = db.sequelize.define('usuarios',{
    CPF: {
        type: db.Sequelize.STRING,
        allowNull: false,  
    },
    p_nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    sobre_nome: {
        type: db.Sequelize.STRING(45),
        allowNull: false,
    },
    email: {
        type: db.Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    telefone: {
        type: db.Sequelize.STRING(45),
        allowNull: false,
    },
    senha: {
        type: db.Sequelize.STRING(45),
        allowNull: false,
    },
    isAdmin: {
        type: db.Sequelize.BOOLEAN,
        defaultValue: false,
    }
    
})

User.sync()

module.exports = User

//User.sync({force: true})
