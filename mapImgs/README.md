## lazyLoad 工具说明

主要是为canvas绘图提供了图片对象的预准备，方便开发者快速调用图片对象。

### 使用方式

1. 加载并收集图片对象

```
let dealImg = async() => {
  let res = await lazyLoad({
      aaa: '1.jpg',
      bbb: '2.png'
  })

  console.log(res)
}

//  打印结果 {aaa: img, bbb: img}
```

2. 加载并收集图片对象

```
let dealImg = async() => {
  let res = await lazyLoad({
      aaa: '1.jpg',
      bbb: '2.png'
  })

  console.log(res)
}

//  打印结果 {aaa: '1.jpg', bbb: '2.png'}
```


### 关于图片跨域问题

lazyload中默认开启了图片跨域，当然还需要后台图片服务器端开启图片资源可可跨域调取。

后台图片服务器跨域资源开启如下：

```
响应头中附加上 Access-Control-Allow-Origin: * 字段
```