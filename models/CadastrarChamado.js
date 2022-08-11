const db = require("./db");
const cliente = require("./Cadastro_Cliente")

const CadastrarChamado = db.sequelize.define('Chamados', {  

    problema: {
        type: db.Sequelize.TEXT,
        allowNull: false,
    },

    status: {
        type: db.Sequelize.STRING,
        defaultValue: "Aberto",
        //allowNull: false,
    },

    dataAbertura: {
        type: db.Sequelize.DATE,
        allowNull: false,
    },

    dataFechamento: {
        type: db.Sequelize.DATE,
        //allowNull: false,
    },

    descricaoSolucao: {
        type: db.Sequelize.STRING,
    },

})

//Relacionamento 1:N entre Cliente e Chamado. 
//Um cliente tem vários chamados e um chamado pertence a um cliente.

CadastrarChamado.belongsTo(cliente, {
    constraint: true,
    foreignKey: {
        name:"cliente_id_fk",
        allowNull: false,
        onDelete: 'CASCADE'
    },
})

cliente.hasMany(CadastrarChamado, {
    foreignKey: {
        name:"cliente_id_fk",
        allowNull: false,
        onDelete: 'CASCADE'
    },
})



CadastrarChamado.sync();

module.exports = CadastrarChamado;