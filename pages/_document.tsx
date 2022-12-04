import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;400;700;800&display=swap"
          rel="stylesheet"
        />
         <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
         <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@100;200;400;700;800&display=swap" rel="stylesheet" />
         <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@100;200;400;700;800&display=swap" rel="stylesheet" />
         <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script:wght@100;200;400;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;