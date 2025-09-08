//criar um banco no mongo
// use ("nome do banco")
use ("Escola");
// criar uma coleção
//db.createCollection("nome da coleção")
db.createCollection("Alunos");
// db.Alunos.insertMany([
//     {"nome":"Rafael", "idade":33,"email":"rafael@email.com" },
//     {"nome":"Flávia", "idade":30,"email":"flavia@email.com" },
//     {"nome":"Bruna", "idade":20,"email":"bruna@email.com" },
//     {"nome":"Pedro", "idade":50,"email":"pedro@email.com" },
//     {"nome":"Carolina", "idade":30,"email":"carol@email.com" },
//     {"nome":"Gustavo", "idade":27,"email":"gustavo@email.com" },       
// ])
console.log("-----Find-----");
console.log(db.Alunos.find({}));

//exibir colunas

console.log("-----Find Colunas-----");
console.log(db.Alunos.find({},{"_id":0,"nome":1,"idade":1}));

//exibir por filtro

console.log("-----Find Filtro-----");
// exemplo de associação com SQL SELECT nome, idade from Alunos WHERE nome="Rafael"
console.log(db.Alunos.find({"nome": "Rafael"},{"_id":0,"nome":1,"idade":1}));


// saber quantos registros na coleção
console.log("-----Total de Registros-----");
console.log(db.Alunos.countDocuments({}));

//excluir um documento
console.log("----- Excluir Documento -----")
console.log(db.Alunos.deleteOne({ _id: ObjectId('68acf4040acc5ec6fbeec4ac')}))

console.log(db.Alunos.find({}))