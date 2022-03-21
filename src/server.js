const app = require('./index');

const connect=require('./configs/db')

app.listen(5000,async (req, res) => {
    try{
     console.log('listening on port 5000')
    }catch(err){
        console.error(err.message);
    }
})