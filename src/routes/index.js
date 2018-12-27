const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  //res.sendfile(path.join(__dirname, 'views/index.html') );

  res.render('index',{title:'MSPK2018'});
});

router.get('/contact',(req,res)=>{
  //res.sendfile(path.join(__dirname, 'views/index.html') );

  res.render('contact',{title:'MSPK2018'});
});

router.get('/about',(req,res)=>{
  //res.sendfile(path.join(__dirname, 'views/index.html') );

  res.render('about',{title:'MSPK2018'});
});

router.get('/ubicacion',(req,res)=>{
  //res.sendfile(path.join(__dirname, 'views/index.html') );

  res.render('ubicacion',{title:'MSPK2018'});
});

router.get('/testimonios',(req,res)=>{
  //res.sendfile(path.join(__dirname, 'views/index.html') );

  res.render('testimonios',{title:'MSPK2018'});
});

  module.exports = router;
