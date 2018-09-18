## fetchApi工具说明

fetchApi简单封装了fetch，使得fetch在使用起来更简单，主要利用Promise进行封装，通过async调用，调用者只需要关注参数传递即可。

默认跨域，默认GET方式请求，参数可以自己传递。

### 使用方式

前端调用GET方式

```
let getFun = async() => {
    let res = await fetchApi({
        url: 'https://www.apiopen.top/journalismApi', 
    })
    console.log(res)
}
```

前端调用POST方式

```
let postFun = async (params = {}) => {
    let res = await fetchApi({
        url: 'https://www.apiopen.top/journalismApi', 
        method: 'POST',
        mode: 'cors',
        body: JSON.stringfy(params)
    })
    console.log(res)
}
```