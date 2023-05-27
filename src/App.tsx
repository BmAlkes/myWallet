import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import dark from "./styles/themes/dark";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
