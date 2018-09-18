
/**
 * 文章列表 params
 * title: 文章标题
 * date: 文章发表日期 
 * des: 文章描述
 * author: 作者
 * like: 点赞数
 * collection: 收藏
 * read: 阅读数
 * comment: 评论数
 */

 const schemaList = {
    title: String,
    date: { type: Date, Dafault: new Date},
    des: String,
    author: String,
    like: Number,
    col: Number,
    read: Number,
    comment: Number
 }

 module.exports = {
     schemaList,
 }