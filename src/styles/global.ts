import { createGlobalStyle } from 'styled-components'
import { GlobalVariables } from './global.interfaces'
import { neutral, white } from './colors'
/* GLOBAL VARIABLES */
export const GlobalSettingsVariables: GlobalVariables = {
  fontFamily: 'Outfit',
  fontSize: '16px',
  marginSize: 0,
  paddingSize: 0,
  boxSizing: 'border-box'
}

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: ${GlobalSettingsVariables.fontSize};
  }
  
  body{
    background-color: ${neutral.main};
    color: ${white};
  }

  * {
    font-family: ${GlobalSettingsVariables.fontFamily}, sans-serif;
    box-sizing: ${GlobalSettingsVariables.boxSizing};
    padding: ${GlobalSettingsVariables.paddingSize};
    margin: ${GlobalSettingsVariables.marginSize};
  }

  @media screen and (max-width: 480px) {
    :root {
      font-size: 14px;
    }
  }

`
