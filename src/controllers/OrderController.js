const Order = require('../models/Order');

module.exports = {
    async index(request, response) {
        const orders = await Order.find();

        return response.json(orders);
    },

    async store(request, response) {
        const test = request.body;
        const { lista, end, obs, data, dataEntrega } = test
        const id = Math.random();
        const done = false;
    
            pedido = await Order.create({
                id,
                lista,
                end,
                obs,
                data,
                dataEntrega,
                done,
            })
            console.log(`Pedido de ${pedido.end.nome} Cadastrado`)
            return response.json(pedido);
            
    },


    async deleteOrders(request, response){
        const {id} = request.query
        del = Order.findByIdAndDelete(id, (err, todo) => {
            
            if (err) return response.status(500).send(err);

            const res = {
                message: "Todo successfully deleted",
                id: todo._id
            };
            return response.status(200).send(res);
        })
        
        console.log(`${id} Deleted`)
    },
       
    async updateOrder(request, response) {
    Order.findByIdAndUpdate(request.query.id, request.body, {new: true, useFindAndModify: false},
        (err, todo) => {
        if (err) return response.status(500).send(err);
        return response.send(todo);
        }
    )
    },
        
}