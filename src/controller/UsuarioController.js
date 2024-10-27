const Usuario = require('../model/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();


exports.cadastrarUsuario = async(req,res)=>{
try{
        const  {login, senha} = req.body;
        //criando Hash da senha
        try {
            const salt = await bcrypt.genSalt(12);
            var senhaHash = await bcrypt.hash(senha, salt);
        } catch (hashError) {
            console.error('Erro ao gerar hash:', hashError);
            return res.status(500).json({ error: 'Erro ao gerar hash da senha' });
        }
        
        const usuario = await Usuario.create({login,senhaHash})
        res.status(201).json({msg:'Usuário cadastrado:',login});
}
catch(error){
    res.status(500).json({error:'error ao cadastrar usuario'})
}
};

exports.loginUsuario = async(req,res)=>{
    try{
           const  {login, senha} = req.body;
    
           const usuario = await Usuario.findOne({login: login});
           if(!usuario){
            return res.status(404).json({msg:'error ao encontrar usuário'})
           }
          
           const checkSenha = await bcrypt.compare(senha, usuario.senhaHash)

           if(!checkSenha){
            return res.status(422).json({msg:'Senha inválida'})
           }

           const secret = process.env.SECRET;
           const token = jwt.sign({ nome: usuario.login, nome: usuario.senha}, secret,)
           res.status(200).json({msg:'Autenticação com sucesso', token})
    }
    catch(error){
        res.status(500).json({error:'error ao encontrar usuario'})
    }
    };