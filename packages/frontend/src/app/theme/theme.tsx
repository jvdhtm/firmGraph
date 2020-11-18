const theme = {
  primary: '#8d8741',
  secondary: '#659dbd',
  ternary:'#edc7b7',
  fourth: '#daad86',
  default: '#bc986a',
  danger: '#f13c20',
  warning: '#ffae42',
  success: '#4BB543',
  white: 'white',
  black: '#222d32',
  baseSpace: 8,
  grayscale: [
    '#212121',
    '#414141',
    '#616161',
    '#9e9e9e',
    '#bdbdbd',
    '#e0e0e0',
    '#eeeeee',
    '#ffffff',
  ],
  background : {
    primary: '#ffa520',
    secondary: '#484848',
  },
  fonts : {
    primary: 'Arial',
    pre: 'Courier, monospace',
    quote: 'Georgia, serif',
    base: 10
  },
  heading : {
    color: '#393939',
  },
  btn : {
    minWidth: '140px',
    height: '60px',
  },
  paragraph : {
    color: '#676767',
  },
  mediaBreakpointUp: (screen: string) => {

    const  ScreenSizes:any =  {
      phone: '320px',
      tablet: '768px',
      tabletportrait: '992px',
      desktop: '1024px',
      lgscreen: '1200px',
      xlscreen: '1600px',
    }

    const size =  ScreenSizes[screen];

    return `@media (min-width: ${size})`;

  }
  };
  export default theme;
  