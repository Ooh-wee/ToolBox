;let fetchApi = params => 
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

// let getList = async (params = {}) => {
//   await fetchApi('https://www.apiopen.top/journalismApi', {
//     url: '',
//     method: 'POST',
//     body: JSON.stringify({
//         ...
//     }),
//     ...
//  })
// }

