let express = require('express');
let app=express();

app.set('view engine', 'ejs');

app.listen(3000, function(){
    console.log("servidor carregado");
})

app.get('/', function(req,res){
    res.send("<html><body>Site fatec</body></html");
})
app.get('/historia', function(req,res){
    res.render("secao/historia");
    
})
app.get('/cursos', function(req,res){
    res.render("secao/cursos");
})
app.get('/professores', function(req,res){
    res.render("secao/professores");
})
