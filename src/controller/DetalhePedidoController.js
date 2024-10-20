const { error } = require('console');
const Pedido = require('../model/Pedido');
const Produto = require('../model/Produto');
const DetalhePedido = require('../model/DetalhePedido');


exports.criarDetalhePedido = async(req,res)=>{
    try{
        const  {id_pedido,id_produto,quantidade,preco,desconto} = req.body;
       const pedido = await Pedido.findByPk(id_pedido)
       const produto = await Produto.findByPk(id_produto)
       if(!pedido || !produto){
        res.status(404).json({error:'Pedido ou produto não encontrado'})
       }
       else{
        const detalhePedido = await DetalhePedido.create({id_pedido,id_produto,quantidade,preco,desconto})
        res.status(201).json(detalhePedido);
       }
}
catch(error){
    res.status(500).json({error:'error ao criar detalhe pedido'})
}
};

exports.todosDetalhePedidos= async(req,res)=>{
try{
        const detalhePedido = await DetalhePedido.findAll();
        res.status(201).json(detalhePedido);
}
catch(error){
    res.status(500).json({error:'error ao encontrar detalhes pedidos'})
}
};

exports.alterarDetalhePedido = async(req,res)=>{
    try{
        const {id_detalhePedido} = req.params;
        const {id_pedido,id_produto,quantidade,preco,desconto} = req.body;
        const pedido = await Pedido.findByPk(id_pedido);
        const produto = await Produto.findByPk(id_produto);
        if(!pedido || !produto){
            res.status(404).json({error:"Pedido ou produto não encontrado"})
        }
        else{
        const[update] = await DetalhePedido.update({id_pedido,id_produto,quantidade,preco,desconto},{where:{id_detalhePedido}});

        if(update){
            const detalhePedidoAtualizado = await DetalhePedido.findByPk(id_detalhePedido);
            res.status(200).json(detalhePedidoAtualizado);
        }
        else{
            res.status(404).json({error:"Detalhe do Pedido não encontrado"}

            )
        }
    }
    }catch(error){
        res.status(500).json({error:'Error ao alterar detalhe do pedido'})
    }
};

exports.excluirDetalhePedido = async(req,res)=>{
    try{
        const {id_detalhePedido} = req.params;
        const excluir = await DetalhePedido.destroy({where:{id_detalhePedido}})

        if(excluir){
            res.status(204).send();

        }else{
            res.status(404).json({error:'detalhe pedido não encontrado'} )

        }
    }catch(error){
        res.status(500).json({error:'Erro ao excluir detalhe do pedido'})
    }
}