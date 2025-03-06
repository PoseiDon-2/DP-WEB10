import Nav from '@/components/nav'
import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body>
        <Nav />
        
        {children}
      </body>
    </html>
  )
}