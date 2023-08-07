//Install express server
// const express = require('express');
// const path = require('path');
//
// const app = express();
//
// app.use(express.static('./dist/heroku'));
//
// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/angular-heroku/'}),
// );
//
// app.listen(process.env.PORT || 8080);


const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/articles'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/articles/index.html'));
});

app.listen(process.env.PORT || 8080);
