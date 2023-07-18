import DefaultLayout from "@/Layouts/default";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout >
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
