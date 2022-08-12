const express=require('express');
const port=8000;
const app=express();


//telling app to use ejs view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
if(err){
    console.log(`Error in running server:${err}`);
}
  console.log(`Server is running and up on port:${port}`);
});