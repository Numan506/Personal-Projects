const app = require('./app')
const Port = 3000;



app.listen(Port,()=>{
    console.log(`sever is running at http://localhost:${Port}`);
});