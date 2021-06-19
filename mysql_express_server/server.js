const express = require('express')
const db = require('./db')

const app = express()
app.use(express.json())  //  for data to json 
app.use(express.urlencoded({extended:true}))  //for post function
app.set("view engine","hbs")


app.get('/',(req,res)=>{

  db.getallpersons().then((persons)=>{
    res.render('persons',{persons})
  }).catch((err)=>{
      res.send(err)
  })

  
})

app.get('/add',(req,res)=>{
  res.render('persons_add')
})

app.post('/add',(req,res)=>{
 db.addNewPerson(req.body.name,req.body.age,req.body.city)
 .then(()=>{
   res.redirect('/')
 }).catch((err)=>{ 
   res.send(err)}
   )
})






app.listen(4321,()=>{
  console.log("server start at http://localhost:4321/")
})