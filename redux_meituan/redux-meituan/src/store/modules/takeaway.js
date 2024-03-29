// 编写store
import  {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const foodStore = createSlice({
  name: 'foods',
  initialState: {
    // 商品列表
    foodsList: [],
    // 菜单激活下标
    activeIndex: 0,
    // 购物车列表
    cartList: [],
  },
  reducers: {
    setFoodList (state, action){
      state.foodsList = action.payload
    },
    changeActiveIndex (state, action){
      state.activeIndex = action.payload
    },
    addCart (state, action){
      // 是否添加过 action.payload.id是否在cartList中
      const item = state.cartList.find(item=>item.id === action.payload.id)
      if(item){
        item.count++
      }else{
        state.cartList.push(action.payload)
      }
    },
    // count+ -
    increment(state, action){
      // 关键在于找到修改谁
      const item = state.cartList.find(item=>item.id===action.payload.id)
      item.count++;
    },
    decrement(state, action){
      const item = state.cartList.find(item=>item.id===action.payload.id)
      item.count--;
      if(item.count === 0){
        state.cartList = state.cartList.filter(item=>item.id!==action.payload.id)
      }
    },
    // 清空购物车
    clearCart(state){
      state.cartList = []
    }
  }
})

// 异步获取
const {setFoodList, changeActiveIndex, addCart, increment, decrement, clearCart} = foodStore.actions
const fetchFoodList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodList(res.data))
  }
}

export {fetchFoodList, changeActiveIndex, addCart, increment, decrement, clearCart}

const reducer = foodStore.reducer
export default reducer