import { createTheme } from '@mui/system'
import { purple } from '@mui/material/colors'
const globalTheme = createTheme({
  themeName: 'My Dark Theme',
  palette: {
    primary: {
      main: '#FF5C58',
    },
  },
})

export default globalTheme
