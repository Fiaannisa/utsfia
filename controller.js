'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Project UTS Rest API berjalan!",res)
};

//menampilkan semua semua data sparepart
exports.tampilsparepart = function(req,res){
    connection.query('SELECT * FROM t_sparepart', function(error,rows,fields){
        if (error) {
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};
