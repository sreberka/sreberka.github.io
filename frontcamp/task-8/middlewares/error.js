const error = function (err, req, res, next) {
    return res.status(err.status ? err.status : 500).send('Wrong page!');
};

module.exports = error;