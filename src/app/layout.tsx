import Nav from '@/components/nav'
import './globals.css'
import ProjectSection from '@/components/ProjectSection'
import Header from '@/components/header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body>
        <Nav />
        <Header />
        <ProjectSection />
        {children}
      </body>
    </html>
  )
}