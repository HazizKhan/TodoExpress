let express = require('express');
let app = express();
let bp = require('body-parser')

let _todos = [];

app.use( bp.json() );  
app.use(bp.urlencoded({
  extended: true
})); 

app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/', (req,res)=>{
    
    res.render('./index.ejs', {todos: false});
})

app.post('/', (req,res)=>{
    console.log(req.body);
    _todos.push(req.body.task);
    res.render('./index.ejs',{todos : _todos});
    
})



app.get('*', (req, res)=>{
    res.send('404');
})


app.listen(3000);