import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import navReducer from './features/nav'


const store = configureStore({
  reducer: {
    nav: navReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
      domain="dev-wzza37ptt1vexeyh.eu.auth0.com"
      clientId="kyiy0YY80cnRmMh7l7HewpTDWItNvEI0"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={store}>
        <App/>
      </Provider>
    </Auth0Provider>
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