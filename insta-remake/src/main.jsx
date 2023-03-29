import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

const store = configureStore({
  reducer: {}
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-wzza37ptt1vexeyh.eu.auth0.com"
      clientId="kyiy0YY80cnRmMh7l7HewpTDWItNvEI0"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
        <App/>
    </Auth0Provider>
  </Provider>
)

// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-wzza37ptt1vexeyh.eu.auth0.com"
//     clientId="kyiy0YY80cnRmMh7l7HewpTDWItNvEI0"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <React.StrictMode>
//       <App/>
//     </React.StrictMode>
//   </Auth0Provider>,
//   document.getElementById("root")
// );