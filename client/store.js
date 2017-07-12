// import { createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from './root-reducer'


// export default function configureStore(initialState = {}) {
//   const enhancers = []
  
//   const DevTools = require('./modules/app/components/dev-tools.js').default
//   enhancers.push(DevTools.instrument())
//   const store = createStore(rootReducer, initialState, compose(...enhancers))
  
//   store.history = history
//   return store
// }