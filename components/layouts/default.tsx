import Head from 'next/head';
import Header from 'components/segments/Header';
import Footer from 'components/segments/Footer';

interface DefaultProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  image?: string;
}

const Default: React.FC<DefaultProps> = ({
  children,
  className,
  title = 'Glosawam',
  description = 'Glosawam adalah sebuah aplikasi yang dapat membantu anda mencari istilah yang anda inginkan.',
  image = 'https://glosawam.com/static/images/logo.png',
}) => {
    const siteName = "Glosawam",
          siteTheme = "#4C1D95";

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={description} />
                <meta name="author" content="Atif Aiman al-Serembani" />
                <meta name="theme-color" content={siteTheme} />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nextjs.org/" />
                <meta property="og:image" content={image} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={siteName} />
                <meta property="og:site_name" content={siteName} />
                <meta property="og:locale" content="ms_MY" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
                <meta name="twitter:image:alt" content={siteName} />

                <link rel="manifest" href="/static/manifest.json" />
                <link rel="apple-touch-icon" href="/static/images/icon.png" />
                <link rel="icon" href="/static/images/icon.png" />
                <link rel="shortcut icon" href="/static/images/icon.png" />
                <link rel="mask-icon" href="/static/images/icon.svg" color={siteTheme} />
                <meta name="msapplication-TileColor" content={siteTheme} />


            </Head>
            
            <div className={`flex flex-col bg-base h-screen overflow-y-auto items-center selection:bg-violet-600 selection:text-white`}>
              <Header />
              <main className={`flex flex-1 items-center px-4 py-8 w-full max-w-5xl ${className}`}>{children}</main>
              <Footer />
            </div>
        </>
    );
};

export default Default;