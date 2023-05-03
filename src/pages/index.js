import Image from 'next/image'
import { Inter } from 'next/font/google'
import AboutSchool from '@/components/AboutSchool'
import Footer from '@/components/Footer'
import Framer from '@/components/Framer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <Framer />
    <Footer />
    </main>
  )
}
