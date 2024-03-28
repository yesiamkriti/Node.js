const http = require('http');
const PORT = process.env.PORT || 5050
// create a server - returns a server object
const server = http.createServer((req,res)=>{
    // header information -> text/javascript json
    res.writeHead(200,{
        "content-type":"text/plain"
    })
    res.end('Hello')
})
// make the server  listen for the clients
// event emitter model
// server -> emit a listen event , port no etc
server.listen(PORT,()=>{
    console.log('Server is ready and listening at port', PORT)
})
server.on('error',(error)=>{
    if(error.code == 'EADRINUSE'){
        console.log('port already in use')
    }
})