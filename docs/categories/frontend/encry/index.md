# 前端加密

## 基础

第一版

```javascript
console.log(777)

```

第二版

```javascript
const xx = ['console.log(', 'hello']
const yy = [1,0]
const zz = ['world', '777)']
const result = xx[yy[1]] + zz[yy[0]]
eval(result)

```

第三版: 加入 `btoa` & `atob`，先 `btoa`，再 `atob`

::: tip 注意

`btoa` 不能编码中文，一般需要配合 `encodeURIComponent` 使用

let x = btoa(encodeURIComponent('hello world 测试'))

let y = decodeURIComponent(atob(x))

:::

```javascript
// 增加一个函数
function hunxiao(params){
    // return atob(params) // 如何把 atob 关键词隐藏呢
    return eval("atob(params)") // 字符串可以抽到一个单独的文件中，作为对象的属性值

}

const xx = ['Y29uc29sZS5sb2co', 'aGVsbG8='] // 对数组项进行 btoa 编码操作
const yy = [1,0]
const zz = ['d29ybGQ=', 'Nzc3KQ=='] // 对数组项进行 btoa 编码操作
const result = hunxiao(xx[yy[1]] + zz[yy[0]]) // 使用hunxiao函数进行 atob 解码操作

eval(result)

```
