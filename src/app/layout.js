import { Footer, Layout } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Nav from "@/components/nav";
import './globals.css'

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const navbar = <Nav />
const footer = <Footer>MIT {new Date().getFullYear()} © Developed By Mohammad Arifur Rahman</Footer>

export default async function RootLayout({ children }) {
    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
        <body>
        <Layout
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/moarifur"
            footer={footer}
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}