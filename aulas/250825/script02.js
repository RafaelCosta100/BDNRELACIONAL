//banco
use ("Escola");
// exibir todos
console.log(db.Alunos.find())
//console.log("----- $eq -----")
//comparação
// sem comparação
//db.Alunos.find({"idade":20})

// $eq -> igual a
// db.Alunos.find({"idade":{$eq:30}})
//console.log(db.Alunos.find({"idade":{$eq:30}},{"nome":1, "idade":1}));

// $gt -> maior que
//console.log("-----$gt-----")
//console.log(db.Alunos.find({"idade":{$gt:20}},{"nome":1, "idade":1}));

// $gte -> maior ou igual a
//console.log("-----$gte-----")
//console.log(db.Alunos.find({"idade":{$gte:31}},{"nome":1, "idade":1}));

// $lt -> menor que
//console.log("-----$lt-----")
//console.log(db.Alunos.find({"idade":{$lt:30}},{"nome":1, "idade":1}));

//$lte - menor ou igual a
//console.log("-----$lte-----")
//console.log(db.Alunos.find({"idade":{$lte:29}},{"_id":0, "nome":1, "idade":1}));

//$in - corresponde o que está no array ou matriz
//console.log("-----$in-----")
//console.log(db.Alunos.find({"idade":{$in:[20, 25, 30]}},{"_id":0, "nome":1, "idade":1}));

//$ne - não é igual a
//console.log("-----$ne-----")
//console.log(db.Alunos.find({"idade":{$ne:30}},{"_id":0, "nome":1, "idade":1}));

//$nin - não mostre o que está no array ou matriz
console.log("-----$nin-----")
console.log(db.Alunos.find({"idade":{$nin:[20, 25, 30]}},{"_id":0, "nome":1, "idade":1}));
