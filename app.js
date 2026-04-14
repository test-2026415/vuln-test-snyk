const express = require('express');
const app = express();

// Ping endpoint
app.get('/ping', (req, res) => {
    const host = req.query.host;
    require('child_process').exec('ping -c 1 ' + host, (err, stdout) => {
        res.send(stdout);
    });
});

app.listen(3000);
