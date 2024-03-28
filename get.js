const http = require('http');
const PORT = process.env.PORT || 5050
const todos = require('./todos')

const server = http.createServer((req,res)=>{
    if(req.url === '/api/v1/todos' && req.method === 'GET'){
        res.writeHead(200,{
            'content-type':'application/json'
        })
        res.end(JSON.stringify(todos))
    }
})

server.listen(PORT,()=>{
    console.log('Server is ready and listening at port', PORT)
})
server.on('error',(error)=>{
    if(error.code == 'EADRINUSE'){
        console.log('port already in use')
    }
})