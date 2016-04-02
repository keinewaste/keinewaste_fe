var app = require('./app');
var port = process.env.PORT || 80;

app.listen(port, (error) => {
    if (error) {
        console.info(error);
    } else {
        console.info(`==> Starting server, listening on port ${port}.`);
    }
});
