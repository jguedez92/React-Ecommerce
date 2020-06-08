import { createMuiTheme } from '@material-ui/core/styles'
import { green, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: green[500],
            contrastText: green[50]
        },
        secondary: {
            main: red[500],
            contrastText: red[50]
        }
    }
})

export default theme