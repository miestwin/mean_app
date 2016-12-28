module.exports = function(app, dirname) {

    app.get('*', function(req, res) {
        res.sendFile('public/views/index.html', { root: dirname});
    });

};