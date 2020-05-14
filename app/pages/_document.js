import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    if (Document.getInitialProps) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/static/base.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
