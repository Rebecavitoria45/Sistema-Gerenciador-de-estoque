const { error } = require('console');
const Produto = require('../model/Produto')
const Categoria = require('../model/Categoria')

exports.criarProduto = async(req,res)=>{
    try{
        const  {nome, preco, id_categoria} = req.body;
        const categoriaexiste = await Categoria.findOne({where:{id:req.body.id_categoria}})
        if(!categoriaexiste) return res.status(404).json({ error: 'categoria não encontrada' });
        const produto = await Produto.create({nome,preco,id_categoria})
        res.status(201).json(produto);
}
catch(error){
    res.status(500).json({error:'error ao criar o produto'})
}
};

exports.todosProdutos = async(req,res)=>{
    try{
        const produtos = await Produto.findAll();
        res.status(201).json(produtos);
}
catch(error){
    res.status(500).json({error:'error ao encontrar produtos'})
}
};

exports.alterarProduto = async(req,res)=>{
    try{
        const {id} = req.params;
        const {nome, preco, id_categoria} = req.body;
        const categoriaexiste = await Categoria.findOne({where:{id:req.body.id_categoria}})
        if(!categoriaexiste) return res.status(404).json({ error: 'categoria não encontrada' });

        const[update] = await Produto.update({nome,preco,id_categoria},{where:{id}});

        if(update){
            const produtoAtualizado = await Produto.findByPk(id);
            res.status(200).json(produtoAtualizado);
        }
        else{
            res.status(404).json({error:"Produto não encontrado"}

            )
        }
    }catch(error){
        res.status(500).json({error:'Error ao alterar produto'})
    }
};

exports.excluirProduto = async(req,res)=>{
    try{
        const {id} = req.params;
        const excluir = await Produto.destroy({where:{id}})

        if(excluir){
            res.status(204).send();

        }else{
            res.status(404).json({error:'Produto não encontrado'} )

        }
    }catch(error){
        res.status(500).json({error:'Erro ao excluir o produto'})
    }
}