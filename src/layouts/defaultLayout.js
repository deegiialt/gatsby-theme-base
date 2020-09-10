import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { shoppingTheme, defaultTheme } from '../styles/theme'
import Button from '../components/Button'

const DefaultLayout = ({ children }) => {
  const [theme, setTheme] = useState('default');
  const toggleTheme = () => {
    if (theme === 'default') {
      setTheme('shopping');
    } else {
      setTheme('default');
    }
  };

  return (
    // Note: ThemeProvider can only have one child element.

    // This is how we would toggle w/ env files (using button for demo purposes)
    // <ThemeProvider theme={process.env.theme === 'shopping' ? shoppingTheme : defaultTheme}>
    <ThemeProvider theme={theme === 'shopping' ? shoppingTheme : defaultTheme}>
      <>
        <GlobalStyle />
        { children }
        {/* <button onClick={toggleTheme}>Toggle theme</button> */}
        <Button onClickAction={toggleTheme}>Toggle theme</Button>
      </>
    </ThemeProvider>
  )
};

export default DefaultLayout;