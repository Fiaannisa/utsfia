'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
	response.ok("Project UTS Rest API berjalan!", res)
};

//menampilkan data sparepart
exports.tampildatasparepart = function (req, res) {
	connection.query('SELECT * FROM t_sparepart', function (error, rows, fields) {
		if (error) {
			console.log(error);
		} else {
			response.ok(rows, res)
		}
	});
};
//menampilkan data montir
exports.tampildatamontir = function (req, res) {
	connection.query('SELECT * FROM t_montir', function (error, rows, fields) {
		if (error) {
			console.log(error);
		} else {
			response.ok(rows, res)
		}
	});
};

//menampilkan data sparepart berdasarkan id
exports.tampildatasparepartid = function (req, res) {
	let id = req.params.id;
	connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
		function (error, rows, fields) {
			if (error) {
				console.log(error);
			} else {
				response.ok(rows, res);
			}
		});
};
//menampilkan data montir berdasarkan id
exports.tampildatamontirid = function (req, res) {
	let id = req.params.id;
	connection.query('SELECT * FROM t_montir WHERE id_montir = ?', [id],
		function (error, rows, fields) {
			if (error) {
				console.log(error);
			} else {
				response.ok(rows, res);
			}
		});
};


//Menampilkan Data Service 
exports.tampilservice = function (req, res) {

	connection.query('SELECT t_user.nama_user, t_servis.tgl_servis, t_montir.nama_montir, t_sparepart.nama_sparepart, t_sparepart.harga_sparepart, t_servis.jumlah_sparepart, pembelian.sub_total FROM t_servis  JOIN t_user  JOIN t_sparepart  JOIN t_montir JOIN pembelian  WHERE t_servis.id_user = t_user.id_user  AND t_servis.id_sparepart = t_sparepart.id_sparepart  AND t_servis.id_montir = t_montir.id_montir  ORDER BY t_user.id_user	',
		function (error, rows, fields) {
			if (error) {
				console.log(error);
			} else {
				response.ok(rows, res)
			}
		});
};

//menambahkan data montir
exports.tambahmontir = function (req, res) {
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;
    

    connection.query('INSERT INTO t_montir (nama_montir,harga_perjam) VALUES(?,?)',
        [nama_montir, harga_perjam],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};
//menambahkan data Sparepart
exports.tambahsparepart = function (req, res) {
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;
    

    connection.query('INSERT INTO t_sparepart (nama_sparepart,harga_sparepart,satuan) VALUES(?,?,?)',
        [nama_sparepart, harga_sparepart,satuan], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//menambahkan data User
exports.tambahuser = function (req, res) {
    var nama_user = req.body.nama_user;
	var email = req.body.email;
	var password = req.body.password;
    var role = req.body.role;
    var tanggal_daftar = new Date();

    connection.query('INSERT INTO t_user (nama_user, email, password, role, tanggal_daftar) VALUES(?,?,?,?,?)',
        [nama_user, email, password, role, tanggal_daftar], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//menambahkan data level
exports.tambahlevel = function (req, res) {
    var nama_level = req.body.nama_level;
    var role = req.body.role;
    

    connection.query('INSERT INTO t_level (nama_level, role) VALUES(?,?)',
        [nama_level, role], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};
