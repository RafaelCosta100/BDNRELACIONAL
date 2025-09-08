use ('Escola');
// db.Cursos.insertMany([
// {
//     "nome": "Rafael Sartori", "idade": 33, "curso":"Mongodb", "matricula":"1234",
//     "endereco": {
//         "rua":"Rua da Fatec", "número": 10, "complemento":"", "cidade":"Votorantim",
//         "estado":"SP"
//     },
//     "telefone":[15999222333,11988766544]
// },
// {
//     "nome": "Flávia Sartori", "idade": 29, "curso":"CDN", "matricula":"1010",
//     "endereco": {
//         "rua":"Rua da Fatec Sorocaba", "número": 101, "complemento":"", "cidade":"Sorocaba",
//         "estado":"SP"
//     },
//     "telefone":[15333222999,11900811722]
// }


// ]);
// console.log(db.Cursos.find({"telefone.0":{$eq:15333222999}},{"_id":0, 
//     "nome":1,"endereco.rua":1,"endereco.número":1,"telefone.[0]":1}));

// console.log("----------------------------------------------")

// console.log(db.Cursos.find({"telefone.0":{$eq:15333222999}}))


//deletar um documento
db.Cursos.deleteOne({"nome":"Rafael Sartori"})
//db.Cursos.deleteMany()
