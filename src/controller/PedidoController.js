const { error } = require('console');
const Pedido = require('../model/Pedido');
const Cliente = require('../model/Cliente')

exports.criarPedido = async(req,res)=>{
    try{
        const {dataCompra,cliente_id} = req.body;
       const cliente = await Cliente.findByPk(cliente_id)
       if(!cliente){
        res.status(404).json({error:'Cliente não encontrado'})
       }
       else{
        const pedido = await Pedido.create({dataCompra, cliente_id})
        res.status(201).json(pedido);
       }
}
catch(error){
    res.status(500).json({error:'error ao criar Pedido'})
}
};

exports.todosPedidos = async(req,res)=>{
try{
        const pedidos = await Pedido.findAll();
        res.status(201).json(pedidos);
}
catch(error){
    res.status(500).json({error:'error ao encontrar pedidos'})
}
};

exports.alterarpedido = async(req,res)=>{
    try{
        const {id} = req.params;
        const {datacompra,cliente_id} = req.body;
        const cliente = await Cliente.findByPk(cliente_id);
        if(!cliente){
            res.status(404).json({error:"Cliente não encontrado"})
        }
        else{
        const[update] = await Pedido.update({datacompra,cliente_id},{where:{id}});

        if(update){
            const PedidoAtualizado = await Pedido.findByPk(id);
            res.status(200).json(PedidoAtualizado);
        }
        else{
            res.status(404).json({error:"Pedido não encontrado"}

            )
        }
    }
    }catch(error){
        res.status(500).json({error:'Error ao alterar pedido'})
    }
};

exports.excluirPedido = async(req,res)=>{
    try{
        const {id} = req.params;
        const excluir = await Pedido.destroy({where:{id}})

        if(excluir){
            res.status(204).send();

        }else{
            res.status(404).json({error:'pedido não encontrado'} )

        }
    }catch(error){
        res.status(500).json({error:'Erro ao excluir pedido'})
    }
}