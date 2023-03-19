import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { emotionCache } from "@/emotionCache";

export default function App(props: AppProps) {
  const { Component } = props; // only destructuring Component from props as pageProps has the type any triggering a TS error

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider
        // withGlobalStyles
        // withNormalizeCSS
        emotionCache={emotionCache()}
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}>
        {/* pass the pageProps down to the component */}
        <Component {...props.pageProps} />
      </MantineProvider>
    </>
  );
}
