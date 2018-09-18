## onCookie 工具说明

整合了cookie和localStorage的Api，简单易用，传参即可

### cookie模式

#### 增加cookie

1. 新增cookie 传递单个参数

```
ohCookie({set: {a: '1111'}, cookie: true})
```

2. 新增cookie 传递多个参数

```
ohCookie({set: {a: '1111', b: '2222', c: '3333'}, cookie: true})
```

3. 新增cookie 传递失效时间

```
ohCookie({set: {a: '1111', b: '2222', c: '3333'}, expires: 10, cookie: true})
```

#### 删除cookie

1. 删除单个cookie

```
ohCookie({remove: 'a', cookie: true})
```

2. 删除多个cookie

```
ohCookie({remove: ['c', 'b'], cookie: true})
```

#### 获取cookie列表

```
console.log(ohCookie({get: true, cookie: true}))
```

#### 清空所有cookie

```
ohCookie({clear: true, cookie: true})
```


### localStorage模式

#### 插入localStorage

1. 单数据插入

```
ohCookie({set: {a: '1111'}})
```

2. 多数据插入

```
ohCookie({set: {a: '1111', b: '2222', c: '3333'}})
```

#### 删除localStorage

1. 删除单个localStorage

```
ohCookie({remove: 'a'})
```

2. 删除多个localStorage

```
ohCookie({remove: ['a', 'b']})
```

#### 获取localStorage

```
ohCookie({get: true})
```


#### 清空localStorage

```
ohCookie({clear: true})
```