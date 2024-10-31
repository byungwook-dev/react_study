import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./global/globalStyle";
import Styled03 from "./pages/docs/_component/Styled03";
import theme from "./global/theme";



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Styled03 />
      </ThemeProvider>
    </>
  );
}

export default App;
