import { Provider } from "react-redux"
import { store } from "store"
import { AppProps } from "next/app"
import "styles/global.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
