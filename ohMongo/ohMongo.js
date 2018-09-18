const mongoose = require('mongoose')


let conn = () => 
    new Promise((reslove, reject) => {
        mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }, (err) => {
            if(!err){
                reslove(mongoose)
            } else {
                reject(err);
            }
        })
    })
    
/**
 * params
 * mongo 已经连接的数据库
 * type 选择schema的数据类型
 * name 需要操作的数据表名
 */

let model = (conn, type, name) => {
    const schema = new conn.Schema(type)
    return conn.model(name, schema, name) 
}    

let schema = () => {
    return schema = new conn.Schema(type)
}

module.exports = {
    conn,
    model,
    schema
};