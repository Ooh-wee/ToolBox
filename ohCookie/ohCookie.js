/*
* params {set: {}, remove: {},  get: {}, clear, expires: , cookie: Bollean}
*
*
*
**/

let ohCookie = (params = {}) => {
    if(params.cookie){
        switch(has(params)){
            case 'set':
                Object.keys(params.set).map(v => {
                    if(params.expires){
                        let date = new Date();
                        date.setTime(date.getTime()+(params.expires*24*60*60*1000));
                        document.cookie = v + '=' +  params.set[v] + ';' + 'expires=' + (date.toGMTString())
                    } else {
                        document.cookie = v + '=' +  params.set[v] + ';'
                    }
                })
            break;
    
            case 'remove':
                if(params.remove instanceof Array){
                    Object.keys(params.remove).map(v => {
                        document.cookie = params.remove[v] + '=' + '' + ';' + 'expires= Thu, 01 Jan 1970 00:00:00 GMT'
                    })
                } else {
                    document.cookie = params.remove + '=' + '' + ';' + 'expires= Thu, 01 Jan 1970 00:00:00 GMT'
                }

            break;
   
            case 'get':
            if(params.get){
                let cookies = document.cookie.split(' ')
                return document.cookie
            } else {
                return null
            }
    
            case 'clear':
               if(params.clear){
               document.cookie.split(' ').map(v => {
                  document.cookie = v.split('=').shift() + '=' + '' + ';' + 'expires= Thu, 01 Jan 1970 00:00:00 GMT'
               })
               }
            break;
    
            default:
            return;
        }
    } else {
        switch(has(params)){
            case 'set':
                Object.keys(params.set).map(v => {
                    localStorage.setItem(v, params.set[v])
                })
            break;
  
            case 'remove':
                if(params.remove instanceof Array){
                    params.remove.map(v => {
                        localStorage.removeItem(v)
                    })
                } else {
                    localStorage.removeItem(params.remove)
                }  
            break;
    
            case 'get':
                if(params.get){
                    return localStorage;
                } else {
                    return null;
                }
                

            case 'clear':
                if(params.clear){
                   localStorage.clear()
                }
            break;
    
            default:
            break;
        }       
    }

}

let has = (params) => {
    let deal = ['set', 'remove', 'get', 'clear'],
        res;
    deal.map(value => {
        if(Object.keys(params).filter(v => v == value).length > 0){
           res = Object.keys(params).filter(v => v == value).pop();
        }
    })
    return res;
}
    
    