import {createSlice} from '@reduxjs/toolkit';

const counterStore = createSlice({
  name: 'counter',
  // 初始化状态
  initialState: {
    count: 0
  },
  // 修改状态方法 同步 直接修改支持
  reducers:{
    increment(state: any){
      state.count++
    },
    decrement(state: any){
      state.count--
    },
    addToNum(state, action){
      state.count = action.payload
    }
  }
})

// 解构actionCreator函数
const {increment, decrement, addToNum} = counterStore.actions

// 获取reducer
const reducer = counterStore.reducer

// 按需导出actionCreator
export {increment, decrement, addToNum}
// 默认导出reducer
export default reducer