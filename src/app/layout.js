import Provider from "@/components/provider";
import ThemeChanger from "@/components/themeChanger";
import "@/styles/globals.css";

export const metadata = {
  title: "Cuánto para el finde largo",
  description: "Averiguá cuánto falta para el finde largo",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
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