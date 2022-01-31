
const  express= require('express');
//const req = require('express/lib/request');
//const res = require('express/lib/response');
const router = express.Router();
const pool = require('../config/database');

router.get('/', async (req,res)=>{
      
    const  {id}= req.body;
        console.log("id------->>>>>>>",req.body);
        try{ 
                const resp= await pool.query('SELECT * FROM login');
          console.log("ok CONSULTA")
          console.log(resp);
          res.json({resp:resp})
        }catch(e){
              res.json({mens:"fallo "})
              
        }
     //res.json({resp: res})

});


module.exports= router;