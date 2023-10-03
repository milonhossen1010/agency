import SiteNavBar from '@/components/SiteNavBar'
import './globals.css'
import SiteFooter from '@/components/SiteFooter'
import NextTopLoader from 'nextjs-toploader'

export async function generateMetadata() {
  // SEO DATA FETCH
  const res = await fetch(process.env.BASE_URL + 'api/SiteMeta/home')
  const JSON = await res.json();
  return {
    title: JSON[0]['title'],
    description: JSON[0]['description'],
    keywords: JSON[0]['keywords'],
    oneGraph: {
      image: JSON[0]['image'],
    },
  };
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <NextTopLoader color='#269669' height={3} speed={200} />
        <SiteNavBar />
        {children}
        <SiteFooter />
      </body>

    </html>
  )
}
