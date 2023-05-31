import "@/styles/globals.css";
import dayjs from "dayjs";
import locale_es from "dayjs/locale/es";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { Inter } from "next/font/google";
dayjs.extend(localizedFormat)
dayjs.locale(locale_es);

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Cuánto para el finde largo",
  description: "Averiguá cuánto falta para el finde largo",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
