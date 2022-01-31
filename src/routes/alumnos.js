
const  express= require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();
const pool = require('../config/database');

router.get('/', async (req,res)=>{
      
        const  {id}= req.body;
            console.log("id------->>>>>>>",req.body);
            try{ 
                    const resp= await pool.query('SELECT * FROM alumnos');
              console.log("ok CONSULTA")
              console.log(resp);
              res.json({resp:resp})
            }catch(e){
                  res.json({mens:"fallo "})
            }
         //res.json({resp: res})

});

  router.post('/',async (req,res)=>{

          const newLog={
                id_login,
                usuario,
                contraseña       
          } = req.body;
            
          try{

        await   pool.query ('INSERT INTO login set ?', [newLog]);   
        res.json({resp:"Consulta exitosa"})
          }catch(e){
              console.log(e);
                res.json({mens:"fallo "})
          }
  });

module.exports= router;
