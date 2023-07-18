import DefaultLayout from "@/Layouts/default";

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout >
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
