let fetchApi = params => 
new Promise((reslove, reject) => {
  let fetchArgs = {
    url: params.url,
    args: 
        Object.keys(params).map(v => v).filter(v => v !== 'url') ||  {
        mode: 'cors', 
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'text/plain'
        }),}
      }    
  fetch(fetchArgs.url, fetchArgs.args).then((res) => {
    let doc = res.text()
    reslove(doc)
  }).catch((err) => {
    reject(err)  
  })
})

export default fetchApi;  


 /*
method - 支持 GET, POST, PUT, DELETE, HEAD
url - 请求的 URL
headers - 对应的 Headers 对象
referrer - 请求的 referrer 信息
mode - 可以设置 cors, no-cors, same-origin
credentials - 设置 cookies 是否随请求一起发送。可以设置: omit, same-origin
redirect - follow, error, manual
integrity - subresource 完整性值(integrity value)
cache - 设置 cache 模式 (default, reload, no-cache)
 */