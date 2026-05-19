import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contract Risk Scanner — Spot Red Flags Before You Sign',
  description: 'AI-powered freelance contract analysis. Instantly flag risky payment terms, IP ownership traps, and liability clauses — with safer alternatives suggested.',
  keywords: 'freelance contract review, contract risk analysis, IP ownership, payment terms, liability clauses',
  openGraph: {
    title: 'Contract Risk Scanner',
    description: 'Scan freelance contracts for payment and liability red flags with AI.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0dbe267d-d0aa-46ec-a5ca-6c063413d669"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
