import './globals.css'
import { Inter } from 'next/font/google'
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat';
import locale_es from 'dayjs/locale/es';
dayjs.extend(localizedFormat);
dayjs.locale(locale_es);

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cuánto para el finde largo',
  description: 'Averiguá cuánto falta para el finde largo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
