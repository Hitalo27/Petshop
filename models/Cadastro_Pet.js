const db = require('./db')
const usuario = require("./Cadastro_Cliente")

const Pet = db.sequelize.define('Pets',{
    nome: {
        type: db.Sequelize.STRING
    },
    peso:{
        type: db.Sequelize.FLOAT
    },
    idade: {
        type: db.Sequelize.FLOAT
    },
    raça: {
        type: db.Sequelize.STRING
    }
})


//relacionamento 1:N entre Cliente e Pets
//Um cliente pode ter vários eventos e um evento pertence a um cliente
Pet.belongsTo(usuario, {
    constraint: true,
    foreignKey: {
        name: "usuario_id_fk",
        onDelete: 'CASCADE',
    },
})

usuario.hasMany(Pet, {
    foreignKey: {
        name: "usuario_id_fk",
        onDelete: 'CASCADE',
    },
})


Pet.sync()

module.exports = Pet

//Pet.sync({force: true})