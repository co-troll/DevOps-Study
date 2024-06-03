const net = require('net');

const server = net.createServer(() => { });

server.on("connection", (client) => { 
    client.setEncoding('utf-8');
    console.log('클라이언트가 접속했다!');
    client.on('data', (chunk) => {
        console.log(chunk);
    })
})

server.on("close", () => {
    console.log("클라이언트가 나갔다!")
})

server.listen(3000, () => {
    console.log("서버가 대기상태다!");
});