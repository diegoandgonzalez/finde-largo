import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Cuánto para el finde largo",
  description: "Averiguá cuánto falta para el finde largo",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;