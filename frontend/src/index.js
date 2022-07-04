import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { fetchUsers } from './features/users/usersSlice'
import { fetchNgo } from './features/ngo/ngoSlice'
import { fetchNodal } from './features/nodal/NodalSlice'
const root = ReactDOM.createRoot(document.getElementById('root'))

store.dispatch(fetchUsers())
store.dispatch(fetchNgo())
store.dispatch(fetchNodal())

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
    {/* <App  */}
  </React.StrictMode>,
)
