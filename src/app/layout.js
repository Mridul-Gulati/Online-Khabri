import { cx } from '../utils'
import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import siteMetadata from '../utils/SiteMetadata'
import ThemeScript from '../components/ThemeScript'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: "--font-in" })
const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: "--font-mr" })

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      siteMetadata.socialBanner
    ],
    locale: 'en_US, en_IN, hi_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner], // Must be an absolute URL
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R3GEZGPXV0"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R3GEZGPXV0');
          `}
        </Script>
        <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></Script>
        <Script id="onesignal" strategy="afterInteractive">
          {`
            window.OneSignalDeferred = window.OneSignalDeferred || [];
            OneSignalDeferred.push(async function(OneSignal) {
              await OneSignal.init({
                appId: "660d5964-dcf7-44b7-8345-13544b9f2474",
              });
            });
          `}
        </Script>
      </head>
      <body
        className={cx(inter.variable, manrope.variable, 'font-mr bg-light dark:bg-dark')}>
        <ThemeScript />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
