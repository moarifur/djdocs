import { Footer, Layout } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Nav from "@/components/nav";
import './globals.css'

export const metadata = {
    // Define your metadata here
}

// ✅ Cache the promise OUTSIDE the component
const pageMapPromise = getPageMap()

const navbar = <Nav />
const footer = (
    <Footer>
        MIT {new Date().getFullYear()} © Developed By Mohammad Arifur Rahman
    </Footer>
)

export default async function RootLayout({ children }) {
    // ✅ Await the cached promise
    const pageMap = await pageMapPromise

    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
        <body>
        <Layout
            navbar={navbar}
            pageMap={pageMap}
            docsRepositoryBase="https://github.com/moarifur"
            footer={footer}
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}