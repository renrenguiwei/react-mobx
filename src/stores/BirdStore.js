import {  observable, autorun } from 'mobx'

class BirdStore {
  @observable birds = [] // 装饰器函数
}

const store = window.store = new BirdStore() // 便于浏览器调试
export default store // 导出实例，不是类

autorun(() => {
  console.log('print')
  console.log(store.birds)
})
