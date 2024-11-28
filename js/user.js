export default {
    username:'lgh',
    age:'21',
    print() {
        console.info(`姓名${this.username},年龄:${this.age}`)
    }
}

let girl ={
    realName:'迪丽热巴', 
    cup:'E'
}
 
export {girl}
// 需要导入 要先 导出 
// 导出 3:
//  1. 直接写在组件上面（变量、对象、函数....)
//export let User

//  2. 写在底部（批量导出）
// export {User,girl}

// 3. 导出默认组件