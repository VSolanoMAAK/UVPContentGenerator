export const metadata = { title: 'UVP Content Generator', description: 'Generador de contenidos por audiencias y buyer personas' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="es"><body className="min-h-screen antialiased">{children}</body></html>);
}
