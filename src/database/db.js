// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//  // utilizar o objeto do banco de dados, para nossas operações
db.serialize( () => {
    // com comandos sql
    // Criar uma tabela com comandos sql
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // // inserir dados na tabela
    // const query = `
    //         INSERT INTO places (
    //             image,
    //             name,
    //             address,
    //             address2,
    //             state,
    //             city,
    //             items
    //         ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas",
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com secesso!")

    // }

    // db.run(query, values, afterInsertData) // insere os dados na tabela

    // // Consultar os dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows) { //mostra tudo
    // // db.all(`SELECT name FROM places`, function(err, rows) { // mostra só o 'name'
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("AQui estão seus registros")
    //     console.log(rows)
    // })

    // //Deletar um dados da tabela
    // db.run('DELETE FROM places WHERE id = ?', [3], function(err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // }) // deleta dado do id = 1
})

