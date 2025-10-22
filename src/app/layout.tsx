import './globals.css'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const metadata = { icons: { icon: '/icon.png' }, title: 'UVP Content Generator', description: 'Generador de contenidos por audiencias y buyer personas' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="es"><body className={`min-h-screen antialiased ${inter.className}`}>{children}</body></html>);
}
