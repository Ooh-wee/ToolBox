;let lazyLoad = (params = {}) => 
   new Promise((reslove) => {
    let len = Object.keys(params).filter(v => v !== 'img').length,
        loaded = 0,
        reObj = {};

    Object.keys(params).filter(v => v !== 'img').map(v => {
        let img = new Image()
        img.crossOrigin = "*" // 默认开启跨域请求
        img.onload = () => {
            loaded++
            console.log(loaded)
            if(loaded == len){
              reslove(reObj)
            }
        }
        img.src = params[v]
        if(params['img']){
            reObj[v] = params[v]
        } else {
            reObj[v] = img
        }
    })   
   })
