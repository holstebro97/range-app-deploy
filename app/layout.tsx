"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { Toaster } from "sonner"
import { PasswordProtection } from "@/components/password-protection"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated")
    setIsAuthenticated(auth === "true")
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return null // Or a loading spinner
  }

  if (!isAuthenticated) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <PasswordProtection onCorrectPassword={() => setIsAuthenticated(true)} />
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body className={`${inter.className} nordic-bg min-h-screen`}>
        <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-4 lg:p-8">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
