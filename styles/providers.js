import { lightTheme, darkTheme } from "./theme";
export default ({ children }) => {
    const { value } = useDarkMode(false, { storageKey: null, onChange: null })
    const theme = value ? darkTheme : lightTheme
  
    const [mounted, setMounted] = React.useState(false)
  
    React.useEffect(() => {
      setMounted(true)
    }, [])
  
    const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>
  
    // prevents ssr flash for mismatched dark mode
    if (!mounted) {
      return <div style={{ visibility: 'hidden' }}>{body}</div>
    }
  
    return body
  }
  