import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import Layout from '../lib/components/Layout'

const lightTheme = createTheme({
  type: 'light',
  theme: {

  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {

  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </ThemeProvider>
  )
}

export default MyApp
