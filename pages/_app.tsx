import { Provider } from 'react-redux'
import React from "react"
import moment from 'moment'
import 'react-quill/dist/quill.snow.css'
import 'moment/locale/uk'
import store from "../redux/store"
import '../styles/globals.css'

moment.locale('uk')

function MyApp({ Component, pageProps }) {
  return <Provider store={ store } >
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
