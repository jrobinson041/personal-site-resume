import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../styles.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>John Robinson | Software Engineer</title>
        <meta name="title" content="John Robinson | Software Engineer" />
        <meta
          name="description"
          content="John Robinson | Software Engineer | Front-End engineer specializing in ReactJS"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.john-robinson.com/" />
        <meta property="og:title" content="John Robinson | Software Engineer" />
        <meta
          property="og:description"
          content="John Robinson | Software Engineer | Front-End engineer specializing in ReactJS"
        />
        <meta
          property="og:image"
          content="https://john-robinson.com/plane.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.john-robinson.com/" />
        <meta
          property="twitter:title"
          content="John Robinson | Software Engineer"
        />
        <meta
          property="twitter:description"
          content="John Robinson | Software Engineer | Front-End engineer specializing in ReactJS"
        />
        <meta
          property="twitter:image"
          content="https://john-robinson.com/plane.jpg"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
