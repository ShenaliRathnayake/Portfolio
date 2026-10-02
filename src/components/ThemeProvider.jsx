import { ThemeProvider as NextThemesProvider } from "next-themes";


function ThemeProvider({ children }) {

  return (

    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >

      {children}

    </NextThemesProvider>

  );

}


export default ThemeProvider;