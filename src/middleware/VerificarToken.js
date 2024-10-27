const jwt = require('jsonwebtoken')
require('dotenv').config();

function verificaToken(req, res, next){
   const token = req.headers['authorization'];
   if(!token) return res.sendStatus(403);

   jwt.verify(token, process.env.SECRET,(err,data)=>{
    if(err) return res.sendStatus(403);
    req.usuario = data.usuario
    next();
   });
}

module.exports = verificaToken;