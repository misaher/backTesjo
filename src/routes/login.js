
const { Router } = require('express');
const  express= require('express');
const res = require('express/lib/response');
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


router.post('/',async (req,res)=>{
      const newLog={
            id_login,
            usuario,
            contraseña       
      } =    req.body;
        
      try{

    await   pool.query ('INSERT INTO login set ?', [newLog]);   
    res.json({resp:"Consulta exitosa"})
      }catch(e){
          console.log(e);
            res.json({mens:"fallo "})
      }
});
/*
 en el metodo tipo delete se especifica en la ruta del postman que camo se va a cachar de esye lado por emdio
 de los params  ya que viajara por medio de la url como la imagen del postman este caso es id pero se puee specificar culquier otro
*/

 router.delete('/:id',async(req,res)=>{
      const {id} = req.params;
        console.log('------->>>',req.params);
      try{
         const resp= await pool.query('DELETE FROM login WHERE id_login = ?', [id]); 
         res.json({resp:"Consulta exitosa"})
      }catch(e){
          console.log(e);
          res.json({mens:"fallo "})
      }

 });
 /*
   para el metodo patch  observa que se llama roter.patch devodi a ala peticios tambien obseerva que asi tambien la llamo en el postman
  como se ve ne el odigo linea 67 sustraigo el  id_login de los req.body que es dinde viaja todo el json este se debe lamar tal cual se va asustraer por que si no marcara error esto se ve en el postman y aqui igual
    en este caso solo se modifican los demas campos ya que el id no jaja por que no se debe de haer y va adescuadrar tosas las tablas donde tenga reacion
    se debe construir en un objeto como en la las nlineas 71 a 74


 */
  router.patch('/',async(req,res)=>{
          const {id_login} = req.body;
          const newlogin={
            usuario,
            contraseña
          }= req.body;
      try{
            const resp= await pool.query('UPDATE  login set ? WHERE id_login = ?', [newlogin, id_login]); 
            res.json({resp:"Consulta exitosa"})
         }catch(e){
             console.log(e);
             res.json({mens:"fallo "})
         }
   
  })


module.exports= router;