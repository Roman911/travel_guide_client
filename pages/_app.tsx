import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import React from "react"
import moment from 'moment'
import 'react-quill/dist/quill.snow.css'
import 'moment/locale/uk'
import store from "../redux/store"
import '../styles/globals.scss'
import { useApollo } from '../lib/apolloClient'

moment.locale('uk')

function MyApp({ Component, pageProps }) {
  const client = useApollo()
  return <ApolloProvider client={ client } >
    <Provider store={ store } >
      <Component {...pageProps} />
    </Provider>
  </ApolloProvider>
}

export default MyApp
