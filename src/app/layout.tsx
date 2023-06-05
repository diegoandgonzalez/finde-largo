import Provider from "@/components/provider";
import ThemeChanger from "@/components/themeChanger";
import "@/styles/globals.css";
import { Space_Grotesk } from "next/font/google";
const font = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: "Cuánto para el finde largo",
  description: "Averiguá cuánto falta para el finde largo",
}

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props): React.ReactNode => {
  return (
    <html lang="en" className={font.className}>
      <body className="bg-customGray dark:bg-customDarkPurple">
        <Provider>
          {children}
          <ThemeChanger />
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;