import type { Metadata } from 'next'
import './globals.css'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'LOGO — IT Solutions That Empower Businesses',
  description: 'Full-service IT company delivering modern web solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body><div className="flex flex-col min-h-screen">
  <Navbar />

  <main className="flex-1">
    {children}
  </main>

  <Footer />
</div></body>
    </html>
  )
}
