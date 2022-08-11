const db = require("./db");
const chamado = require("./CadastrarChamado")
const cliente = require("./CadastroCliente")

const CadastrarSolucao = db.sequelize.define('Solucoes', {  

    dataFechamento: {
        type: db.Sequelize.DATE,
        //allowNull: false,
    },

    descricaoSolucao: {
        type: db.Sequelize.STRING,
    },

})

//Relacionamento 1:N entre Solução e Chamado. 
CadastrarSolucao.belongsTo(chamado, {
    constraint: true,
    foreignKey: {
        name: "chamado_id_fk",
        //allowNull: false,
        onDelete: 'CASCADE'
    },
})

chamado.hasMany(CadastrarSolucao, {
    foreignKey: {
        name: "chamado_id_fk",
       // allowNull: false,
        onDelete: 'CASCADE'
    },
})


CadastrarSolucao.belongsTo(cliente, {
    constraint: true,
    foreignKey: {
        name: "cliente_id_fk",
        //allowNull: false,
        onDelete: 'CASCADE'
    },
})

cliente.hasMany(CadastrarSolucao, {
    foreignKey: {
        name: "cliente_id_fk",
       // allowNull: false,
        onDelete: 'CASCADE'
    },
})


CadastrarSolucao.sync({force: true});

module.exports = CadastrarSolucao;