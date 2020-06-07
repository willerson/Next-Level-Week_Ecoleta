const express = require("express")
const server = express()

// pegar o bando de dados
const db = require("./database/db.js")

// configurar pasta publica
server.use(express.static("public"))

// habilida o uso do req.body na nossa função
server.use(express.urlencoded({ extended: true }))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar cainhos da minha aplicação
//página inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um título" })
})
server.get("/create-point", (req, res) => {

    // req.query: Query String da nossa url
    // console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    
    // req.body: O corpo do nosso formulário
    // console.log(req.body)

    // inserir dados no bando de dados
    const query = `
            INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            // return console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com secesso!")
        // console.log(this)

    }

    db.run(query, values, afterInsertData) // insere os dados na tabela


    return res.render("create-point.html", { saved: true })
})


server.get("/search", (req, res) => {

    const search = req.query.search

    if (search == "") {
        // pesquia vazia
        return res.render("search-results.html", { total: 0 })
    }



    // pegar os dados do bando de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) { //mostra tudo
            // db.all(`SELECT name FROM places`, function(err, rows) { // mostra só o 'name'
                if (err) {
                    return console.log(err)
                }
        
                // console.log("AQui estão seus registros")
                // console.log(rows)
                const total = rows.length

                // mostrar a pagina html com os dados do bando de dados
                return res.render("search-results.html", { places: rows, total: total }) // Ou só total
            })

})

// ligar o servidor
server.listen(3000)

// npm start === inicia o servidor node