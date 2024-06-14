import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/providers/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FlowForge - The Ultimate B2C SaaS Automation Platform",
  description: "FlowForge revolutionizes B2C SaaS with seamless Google Drive integration, real-time Slack and Discord notifications, Notion database entries, and Stripe payment processing. Experience a beautifully redesigned node interface with drag-and-drop builders, automation flows, and an infinite canvas. Dive into Aceternity UI with light & dark modes and a stunning landing page. Join the FlowForge journey and automate your world today!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
