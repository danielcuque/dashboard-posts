import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#124E82'
        },
        secondary: {
            main: '#1E88E5'
        },
        error: {
            main: red.A400
        }
    }
})