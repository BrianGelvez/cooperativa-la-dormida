import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cooperativa La Dormida - Sistema de Autogestión",
  description:
    "Plataforma web para socios de la Cooperativa Eléctrica La Dormida. Consulta boletas, realiza pagos, accede a beneficios y más.",
  keywords: "cooperativa, electricidad, internet, television, farmacia, La Dormida",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
