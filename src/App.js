import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./global/globalStyle";
import theme from "./global/theme";


import AnimalsConatiner from "./docs/context/expert/AnimalsConatiner";



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimalsConatiner/>
      </ThemeProvider>
    </>
  );
}

export default App;
