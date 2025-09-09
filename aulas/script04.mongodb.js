use ('Escola');

//db.getCollectionNames();

//db.Alunos.find({});

// db.inventory.insertMany([
//     { '_id':1, 'item':{'name':"ab", 'code':"123"},'qty':15, 'tags':["A", "B", "C"]},
//     { '_id':2, 'item':{'name':"cd", 'code':"123"},'qty':20, 'tags':["B"]},
//     { '_id':3, 'item':{'name':"ij", 'code':"456"},'qty':30, 'tags':["A", "B"]},
//     { '_id':4, 'item':{'name':"XY", 'code':"456"},'qty':25, 'tags':["B","A"]},
//     { '_id':5, 'item':{'name':"mn", 'code':"000"},'qty':20, 'tags':[["A", "B"],"C"]},
//     { '_id':6, 'item':{'name':"kl", 'code':"789"},'qty':100, 'tags':["B", "C"]},
// ]);

//operadores logicos
/*
$and
{$and : [ { <expressão1> }, { <expressão2> }, ... ] }
*/
// db.inventory.find({$and:[{qty:{$gte:20}},{qty:{$lte:30}}]});

/*
$or
{$or : [ { <expressão1> }, { <expressão2> }, ... ] }
*/
// db.inventory.find({
//     $or:[
//     {qty:{$gt:20}},
//     {"item.name":{$eq:"ab"}}
// ]});

/*
$nor traga os documentos que não satisfazem nenhuma das expressões
{$nor : [ { <expressão1> }, { <expressão2> }, ... ] }
*/
// db.inventory.find({
//     $nor:[
//     {qty:{$gt:20}},
//     {"item.name":{$eq:"ab"}}
// ]});

/*
$not traga os documentos que não satisfazem a expressão
*/
db.inventory.find({
    qty:{$not:{$gt:20}}
});