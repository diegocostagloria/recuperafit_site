import '../styles/globals.css'
import '../styles/responsive.css'
import '../styles/mobile-optimizations.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RecoveryFit - Aluguel de Botas Pneumáticas para Recuperação Muscular',
  description: 'Alugue botas pneumáticas de alta performance para acelerar sua recuperação muscular. Entregamos em sua casa em São Paulo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
     <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet" />
        {/* Open Graph meta tags */}
        
        <meta property="og:title" content="RecoveryFit" />
        <meta property="og:description" content="Recupere-se com tecnologia" />
        <meta property="og:image" content="/imagens/logo/logoRecoveryfit.png" />
        <meta property="og:url" content="https://recoveryfit.com.br" />
        <meta property="og:type" content="RecoveryFit"/>
        <meta property="og:site_name" content="RecoveryFit" />


       
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
