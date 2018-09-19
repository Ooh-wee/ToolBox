## fetchApi工具说明

fetchApi简单封装了fetch，使得fetch在使用起来更简单，主要利用Promise进行封装，通过async调用，调用者只需要关注参数传递即可。

默认跨域，默认GET方式请求，参数可以自己传递。

### 使用方式


前端调用方式

```
import fetchapi from './fetchApi'

export let queryFineUser = async(params = {}) => 
  await fetchapi({
      url: 'http://127.0.0.1:3001/findUser',
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(params)
  })
```