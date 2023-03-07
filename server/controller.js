const houses = require('./db.json')
let globalId = 4;

module.exports = {

    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    
    deleteHouse: (req, res) => {
        const { id } = req.params
        const idx = houses.findIndex(house => house.id === +id)
        if(idx >= 0){
            houses.splice(idx, 1)
            res.status(200).send(houses)
        } else {
            res.sendStatus(404)
        } 
    },
    
    createHouse: (req, res) => {
        const { id, address, price, imageURL } = req.body
        if(!id || !address || !price || !imageURL){
            res.sendStatus(400)
        }
        const copy = {
            id: globalId,
            address: address, 
            price: +price,
            imageURL: imageURL
        }
        houses.push(copy)
        globalId++
        res.status(200).send(houses)
    },
    
    updateHouse: (req, res) => {
        const { id } = req.params
        const { type } = req.body
        const idx = houses.findIndex(house => house.id === +id)
        if(type === 'plus'){
            houses[idx].price += 10000
            res.status(200).send(houses)
        } else {
            houses[idx].price -= 10000
            res.status(200).send(houses)
        }
    }
}

