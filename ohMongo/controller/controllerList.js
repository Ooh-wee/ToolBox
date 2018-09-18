
const {conn, model} = require('./ohMongo')

let findList = async (type, name) => {
    let conn_ = await conn();
    let model_ = model(conn_, type, name);
    return new Promise((reslove, reject) => {
        model_.find((err, doc) => {
            if(!err){
                reslove(doc)
            } else {
                reject(err)
            }
            conn_.disconnect()
        })
    })
}


 
module.exports = {
    findList
}   