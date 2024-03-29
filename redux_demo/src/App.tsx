import { useSelector, useDispatch } from "react-redux"
// 导入之前定义的actionCreator
import { increment, decrement, addToNum } from './Store/modules/counterStore'
import { useEffect } from "react"
import { fetchChannelList } from "./Store/modules/channelStore"
import { AppDispatch } from "./types/types"

function App() {
  const {count} = useSelector((state: any) => state.counter)
  const {channelList} = useSelector((state: any) => state.channel)
  const dispatch: AppDispatch = useDispatch()
  // 使用useEffect触发异步
  useEffect(()=>{
    dispatch(fetchChannelList())
  },[dispatch])
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {count}
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(addToNum(10))}>add to 10</button>
      <button onClick={()=>dispatch(addToNum(20))}>add to 20</button>
      <hr />
      <ul>
        {channelList.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
