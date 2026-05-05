import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SaaS Trial Conversion Tracker — Track which trial users convert and why',
  description: 'Analyzes SaaS trial user behavior patterns to predict conversion likelihood and suggest intervention strategies for SaaS founders and growth teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1a3c37b0-42a3-4601-a5a8-02d42a22d948"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
