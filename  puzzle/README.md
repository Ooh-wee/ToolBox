## puzzle 工具说明

用于canvas图片叠加及生成新图，上手非常简单，传参即可。

### 前端调用方式

1. 简单版

图片默认按顺序叠加

```
/**
*  传递参数{ img:图片对象, x: 图片X位置信息, y: 图片Y位置信息, w: 图片显示宽度, h: 图片显示高度 }
*/
    puzzle([
            {img: res.a, x: 0, y: 0, w: 100, h: 100},
            {img: res.b, x: 100, y: 100, w: 100, h: 100},
            {img: res.c, x: 200, y: 200, w: 100, h: 100}
        ])
```

2. 进阶版

如果需要自定义图片叠加位置信息，将参数改成对象，添加index位置信息即可，

```
    puzzle({
        index: true,  // 用于开启位置顺序
        imgs: [
            {img: res.a, x: 0, y: 0, w: 100, h: 100, index: 10},  // index数字越大越排在上面
            {img: res.b, x: 100, y: 100, w: 100, h: 100, index: 1},
            {img: res.c, x: 200, y: 200, w: 100, h: 100, index: 2}
        ]
    })
```

3. 高级自定义版

当然，如果需要设置画布大小，可以进行自定义，如果需要设置多个画布，也可以自定义画布名，传递class或者ID名即可。

```
    puzzle({
        canvas: 'canvas',  // 可缺省
        width: 1000, // 可缺省 默认1000
        height: 1000, // 可缺省  默认 1000
        index: true,  
        imgs: [
            {img: res.a, x: 0, y: 0, w: 100, h: 100, index: 10},
            {img: res.b, x: 100, y: 100, w: 100, h: 100, index: 1},
            {img: res.c, x: 200, y: 200, w: 100, h: 100, index: 2}
        ]
    })
```

4. 输出图片

利用canvas的 toDataUrl 将canvas转换成base64的图像资源，如果需要将base64资源转换成图片的话，请在本仓库中找base64转换图片工具方法

```
let outPut = await puzzle({
    canvas: 'canvas',  // 可缺省
    width: 1000, // 可缺省
    height: 1000, // 可缺省
    index: true,  // 可缺省
    output: true, // 输出图片资源
    imgs: [
        {img: res.a, x: 0, y: 0, w: 100, h: 100, index: 10},
        {img: res.b, x: 100, y: 100, w: 100, h: 100, index: 1},
        {img: res.c, x: 200, y: 200, w: 100, h: 100, index: 2}
    ]
})
```

canvas图片转换中远程图片资源会出现跨域的问题已经在lazyload中提到，解决方案这边再提一下

lazyload中默认开启了图片跨域，canvas转换线上图片资源会出现跨域问题，当然还需要后台图片服务器端开启图片资源可可跨域调取。

后台图片服务器跨域资源开启如下：

```
响应头中附加上 Access-Control-Allow-Origin: * 字段
```