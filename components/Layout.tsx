import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';


const Layout = ({ children }: any) => (
  <>
    <Head>
      <title>Emerson Argueta</title>
      <link rel="icon" href="/logoIcon.png" />
    </Head>

    <Header />

    <main className="container">{children}</main>
    <Footer />
    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
      .container {
        display: flex;
        max-width: 80vw;
        padding: 0 0;
        align-content: center;
        justify-content: center;
      }
    `}</style>
  </>
);

export default Layout;