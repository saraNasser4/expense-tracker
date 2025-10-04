import http from 'http';

const server = http.createServer(async (req, res)=> {

})
server.listen(4000, ()=> {
    console.log("Backend running at http://localhost:4000")
})