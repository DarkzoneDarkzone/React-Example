import React from 'react'
import './App.css'
import Routers from './router'
import { store } from './redux/store';
import { loadState, saveState } from './localStorage'
import { useDispatch } from 'react-redux'
import { setAllState } from './redux/features/Middleware/middlewareSlice'

store.subscribe(() => {
  saveState(store.getState())
})

export default function App() {
  const disPatch = useDispatch()
  const localState = loadState()
  if(localState !== undefined){
    disPatch(setAllState(localState.middleware))
  }
  return (
    <div className="App">
      <Routers/>
    </div>
  )
}
