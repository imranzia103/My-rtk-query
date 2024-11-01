
import ReatDOM from 'react-dom/client'
import './Index.css'
import App from './App.jsx'
import { store } from './app/Store.js'
import { Provider } from 'react-redux'



ReatDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>


    <App />

  </Provider>


)
