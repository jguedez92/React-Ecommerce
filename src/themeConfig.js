import { createMuiTheme } from '@material-ui/core/styles'
import { green, red, blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: blue[500],
            contrastText: blue[50]
        },
        secondary: {
            main: red[500],
            contrastText: red[50]
        },
        background: {
            paper: '#424242',
            default: '#303030'
        }
    }
})

export default theme