const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const { getHouses,  deleteHouse, createHouse, updateHouse } = require('./controller')

app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.put('/api/houses/:id', updateHouse)
app.post('/api/houses', createHouse)


const PORT = 4000

app.listen(PORT, () => console.log('server listening on port 4000'))