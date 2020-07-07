const mysql = require("../config/database")

module.exports = {
    getAll(){        
        return new Promise(function(resolve){
            mysql.connect(function(err){
                mysql.query("select * from student", function(err, results){
                    console.log(results)
                    resolve(results)
                })
            })
        },
        function(reject){
            reject(err)
        })
    },
    get(id){        
        return new Promise(function(resolve){
            mysql.connect(function(err){
                mysql.query("select * from student where id = ?", [id], function(err, results){
                    resolve(results[0])
                })
            })
        },
        function(reject){
            reject(err)
        })
    },
    update(id, student){
        const {name, birthday} = student;
        return new Promise(function(resolve){
            mysql.connect(function(err){
                mysql.query("update student set name = ?, birthday = ? where id = ?", [name, birthday, id], function(err, results){
                    resolve({id, name, birthday})
                })
            })
        },
        function(reject){
            reject(err)
        })
    },
    delete(id){
        return new Promise(function(resolve){
            mysql.connect(function(err){
                mysql.query("delete from student where id = ?", [id], function(err, results){
                    resolve({deleted: true})
                })
            })
        },
        function(reject){
            reject(err)
        })
    },
    insert(student){
        const {name, birthday} = student;
        return new Promise(function(resolve){
            mysql.connect(function(err){
                mysql.query("insert into student (name, birthday) values (?,?)", [name, birthday], function(err, results){
                    console.log(results)
                    resolve({id: results.insertId, name, birthday})
                })
            })
        },
        function(reject){
            reject(err)
        })
    }
}