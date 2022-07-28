import { createTheme } from "@mui/material";

export const Theme = createTheme({
    
    palette:{
        primary:{
            //blue for all themes
            light:"#1976d2",
            dark:"#1976d2",
            main:"#1976d2"
        },
        secondary:{
            //black text for light mode
            //white text for dark mode
    
            light:"#000000",
            dark:"#FFFFFF"
        },
        mode:'light',
    }
})