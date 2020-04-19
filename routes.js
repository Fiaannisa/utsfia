'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsparepart);

    app.route('/tampil/:montir')
        .get(jsonku.tampilsemuamontir);
}