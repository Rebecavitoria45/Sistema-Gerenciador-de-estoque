const { error } = require('console');
const Categoria = require('../model/Categoria');

exports.criarCategoria = async(req,res)=>{
    try{
        const  {nome} = req.body;
        const categoria = await Categoria.create({nome})
        res.status(201).json(categoria);
    }
catch(error){
    res.status(500).json({error:'error ao criar categoria'})
}
};

exports.todasCategorias = async(req,res)=>{
    try{
        const categorias = await Categoria.findAll();
        res.status(201).json(categorias);
}
catch(error){
    res.status(500).json({error:'error ao encontrar categorias'})
}
};

exports.alterarCategoria = async(req,res)=>{
    try{
        const {id} = req.params;
        const {nome} = req.body;
        const[update] = await Categoria.update({nome},{where:{id}});

        if(update){
            const CategoriaAtualizada = await Categoria.findByPk(id);
            res.status(200).json(CategoriaAtualizada);
        }
        else{
            res.status(404).json({error:"Categoria não encontrada"})
        }
    } catch(error){
        res.status(500).json({error:'Error ao alterar categoria'})
    }
};

exports.excluirCategoria = async(req,res)=>{
    try{
        const {id} = req.params;
        const excluir = await Categoria.destroy({where:{id}})

        if(excluir){
            res.status(204).send();

        }else{
            res.status(404).json({error:'categoria não encontrada'} )

        }
    }catch(error){
        res.status(500).json({error:'Erro ao excluir categoria'})
    }
}