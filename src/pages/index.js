import Image from 'next/image'
import { Inter } from 'next/font/google'
import AboutSchool from '@/components/AboutSchool'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <AboutSchool />
    </main>
  )
}
