const express = require('express');
const app = express();

app.get('/ruto/:id', function (req, res) { // corrected the route parameter definition
    const id = req.params.id;
    res.send('Hello President ' + id); 
});

app.listen(9000, function () {
    console.log('Server is running on port 9000');
});
