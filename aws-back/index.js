const express = require('express'),
          app = express(),
         path = require('path'),
          log = console.log,
         PORT = process.env.PORT || 8080;

app.get('*', (req,res)=>{
    res.sendFile(path.resolve((__dirname + './../aws-front/build/index.html')));
})

app.listen(PORT, ()=> log(`We wylin' out on ${PORT}`))