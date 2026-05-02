import { Navbar } from 'nextra-theme-docs'
import Image from 'next/image'

const BookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left page */}
        <path d="M10 20 C30 10, 50 10, 60 20 L60 100 C50 90, 30 90, 10 100 Z" fill="#4F46E5" />

        {/* Right page */}
        <path d="M60 20 C70 10, 90 10, 110 20 L110 100 C90 90, 70 90, 60 100 Z" fill="#6366F1" />

        {/* Spine */}
        <line x1="60" y1="20" x2="60" y2="100" stroke="#312E81" strokeWidth="2" />

        {/* Page lines */}
        <line x1="20" y1="40" x2="50" y2="40" stroke="white" strokeWidth="2" />
        <line x1="20" y1="55" x2="50" y2="55" stroke="white" strokeWidth="2" />
        <line x1="70" y1="40" x2="100" y2="40" stroke="white" strokeWidth="2" />
        <line x1="70" y1="55" x2="100" y2="55" stroke="white" strokeWidth="2" />
    </svg>
)

const Nav = () => {
    return (
        <Navbar
            logo={
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4em' }}>
                    <Image src="/logo.svg" alt="djDocs" width={24} height={24} />
                    <span style={{ fontWeight: 800 }}>djDocs</span>
                    {/* Book SVG added here */}
                    <BookIcon />
                </div>
            }
            projectLink="https://github.com/moarifur/djdocs"
            projectIcon={
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z" />
                </svg>
            }
            chatLink="https://x.com/moarifur"
            chatIcon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="24" height="24" fill="currentColor">
                    <path d="M714.163 519.284L1160.89 0H1055.06L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.83L515.514 749.078L842.672 1226.37H1200L714.137 519.284H714.163Z" />
                </svg>
            }

        />
    )
}

export default Nav