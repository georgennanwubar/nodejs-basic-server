const requestHandler = (req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to my Node Server!</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"/><button type="submit">Send</button></form>');
        return res.end('Enter Username to see list of all users');
    }
    if(url === '/users') {
        //display a list of dummy users
        res.writeHead(200, {'Content-Type': 'text/html'});
        return res.end("<html><body><h1>Users:</h1><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>");
    }
    if(url === '/create-user' && req.method === 'POST') {
        //simply console.log the data & return
        const body = [];
        return req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            let username = Buffer.concat(body).toString().split('=')[1];
            console.log(username);
            res.writeHead(302, {'Location': '/'});
            return res.end();
        });
    }
}
//Export single module requestHandler
exports.handler = requestHandler;
