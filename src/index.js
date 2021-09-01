import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

const initialState = {
  name: 'JSON',
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
const store = createStore(reducer)

const setName = name => ({
  type: 'ADD_NAME',
  payload: name,
})

const App = () => {
  const outState = useSelector(state => state.name)
  return <h1>{outState}</h1>
}

const View = () => {
  const dispatch = useDispatch()
  const changeName = () => {
    dispatch(
      setName({
        name: 'HTML',
      })
    )
  }
  return <button onClick={changeName}>ENTER</button>
}

ReactDOM.render(
  <Provider store={store}>
    <App />
    <View />
  </Provider>,
  document.getElementById('root')
)
