let fetchApi = params => 
new Promise((reslove, reject) => {

  let args = {};
  Object.keys(params).filter(v => v !== 'url').map(v => {args[v] = params[v]})

  let fetchArgs = {
    url: params.url,
    args
    }    
  fetch(fetchArgs.url, fetchArgs.args).then((res) => {
    let doc = res.text()
    reslove(doc)
  }).catch((err) => {
    reject(err)  
  })
})

export default fetchApi;  

