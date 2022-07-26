import { createTheme, responsiveFontSizes }  from '@material-ui/core/styles';
  
const theme = responsiveFontSizes(createTheme({
  spacing: 4,
  typography: {
    fontFamily: [
      'Roboto',
      'Raleway',
      'Open Sans',
    ].join(','),
    h1: {
      fontSize: '5rem',
      fontFamily: 'Raleway',
    },
    h2: {
      fontSize: '3.5rem',
      fontFamily: 'Open Sans',
      fontStyle: 'bold',
    },
    h3: {
      fontSize: '2.5rem',
      fontFamily: 'Roboto',
    },
  },
  
  palette: {
   
    background: {
      default: '#009900'//green
    },
    field:{
      main:'#1976d2',
    },
    primary: {
      main: '#1976d2',//indigo,
    },
    secondary: {
      main: '#E769A6',//pink
    },
    error: {
      main: '#D72A2A',//red
    },
    warning: {
      main: '#FC7B09',//orange
    },
    info: {
      main: '#6B7D6A',//gray
    },
    success: {
      main: '#09FE00',//green
    },
    text: {
      primary: '#000000',//black
    },
    icon:{
      main: '#1976d2'
    }
    

    
  },
}));

const darkTheme =responsiveFontSizes(createTheme({
  spacing: 4,
  typography: {
    fontFamily: [
      'Roboto',
      'Raleway',
      'Open Sans',
    ].join(','),
    h1: {
      fontSize: '5rem',
      fontFamily: 'Raleway',
    },
    h2: {
      fontSize: '3.5rem',
      fontFamily: 'Open Sans',
      fontStyle: 'bold',
    },
    h3: {
      fontSize: '2.5rem',
      fontFamily: 'Roboto',
    },
  },
  
  palette: {
    background: {
      default: '#009900'//green
    },
    field:{
      main:'#FFFFFF',
    },
    primary: {
      main: '#000000',//black
    },
    secondary: {
      main: '#E769A6',//pink
    },
    error: {
      main: '#D72A2A',//red
    },
    warning: {
      main: '#FC7B09',//orange
    },
    info: {
      main: '#6B7D6A',//gray
    },
    success: {
      main: '#09FE00',//green
    },
    text: {
      primary: '#FFFFFF',//white,
      secondary:"#000000"//black
    },
    icon:{
      main: '#FFFFFF'
    },
    

    

    
  },
}));
  
  
export  {theme,darkTheme};